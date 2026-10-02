$rootDir = $PSScriptRoot
if (-not $rootDir) { $rootDir = Get-Location }
$rootDir = Join-Path $rootDir "public"
$rootPath = [System.IO.Path]::GetFullPath($rootDir)
$rootPrefix = $rootPath.TrimEnd('\') + '\'

$portsToTry = 8080..8099
$listener = $null
$startedPort = $null

foreach ($port in $portsToTry) {
    try {
        $l = New-Object System.Net.HttpListener
        $l.Prefixes.Add("http://127.0.0.1:$port/")
        $l.Start()
        $listener = $l
        $startedPort = $port
        Write-Output "HTTP server running at http://127.0.0.1:$port/"
        break
    } catch {
        if ($l) { $l.Close() }
    }
}

if (-not $listener) {
    Write-Error "Failed to start HTTP server on ports 8080-8099"
    exit 1
}


$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".mjs"  = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $response.Headers["X-Content-Type-Options"] = "nosniff"
        $response.Headers["X-Frame-Options"] = "DENY"
        $response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        $response.Headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        $response.Headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.pexels.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"

        if ($request.HttpMethod -notin @("GET", "HEAD")) {
            $response.StatusCode = 405
            $response.Headers["Allow"] = "GET, HEAD"
            $response.Close()
            continue
        }

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or [string]::IsNullOrEmpty($urlPath)) {
            $urlPath = "/index.html"
        }

        if ($urlPath -match '(^|/)\.\.(/|$)' -or $urlPath.Contains('\')) {
            $response.StatusCode = 400
            $response.Close()
            continue
        }

        $relativePath = $urlPath.TrimStart('/').Replace('/', '\')
        $filePath = [System.IO.Path]::GetFullPath((Join-Path $rootPath $relativePath))

        if ($filePath.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path $filePath -PathType Leaf)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $notFoundPath = Join-Path $rootPath "404.html"
            $msg = [System.IO.File]::ReadAllBytes($notFoundPath)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
        }
        $response.Close()
    } catch {
        # continue on client disconnects
    }
}
