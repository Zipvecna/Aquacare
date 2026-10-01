# Error Handling Guide

This project is a static HTML, CSS, and browser-JavaScript site. It has no application server or centralized logging service, so errors should be handled where they occur and shown clearly to visitors when they affect an action.

## Current behavior

- `js/contact-widget.js` validates required contact fields and displays an accessible inline message through an element with `role="alert"`.
- `server.ps1` serves static files, returns `404` for missing paths, and responds with `405` to methods other than `GET` and `HEAD`.
- The PowerShell request loop currently catches errors broadly to tolerate client disconnects. This can also hide unexpected local server errors; use the guidance below when changing that code.
- Other client scripts do not currently share a centralized error display or logging helper.

## Browser JavaScript

- Validate user input before starting an action. Keep validation messages next to the relevant form or control, and make them available to assistive technology with `role="alert"` or an appropriate live region.
- Use `try`/`catch` for operations that can fail asynchronously or at runtime, such as dynamic imports, network requests, JSON parsing, and browser APIs. Do not wrap simple synchronous code in broad catch blocks that conceal programming errors.
- Show visitors a short, actionable message. Do not display stack traces, internal paths, or raw server errors in the page.
- Log unexpected technical details with `console.error(error)` during development, but never log contact form contents, email addresses, phone numbers, or other personal data.
- For optional features, keep the rest of the page usable if the feature fails. For essential actions, provide a retry or a clear alternative where possible.
- When creating DOM from user-provided data, prefer `textContent` and DOM node APIs over interpolating the value into `innerHTML`.
- Disable duplicate submission while an asynchronous action is pending, and restore the control in a `finally` block.

Example pattern:

```js
try {
  await loadOptionalFeature();
} catch (error) {
  console.error("Optional feature failed to load.", error);
  showStatus("This feature is temporarily unavailable. Please try again later.");
}
```

Use a message that matches the action; do not add a shared helper unless multiple features genuinely need the same behavior.

## PowerShell preview server

- Return an appropriate HTTP status code and a generic response body to the requester. Keep internal paths and exception details out of responses.
- Catch only the expected disconnect exception when practical. For unexpected failures, write a concise diagnostic to the server console, close the response safely if it is still open, and keep the request loop running when it is safe to do so.
- Avoid logging request bodies or sensitive query values. The local server is for development only and is not a production hosting server.

## Before finishing a change

1. Test the normal path and the failure path for the behavior changed.
2. Run `npm run check` for JavaScript syntax checks.
3. For server changes, parse `server.ps1` and verify expected HTTP status codes with the local server.
4. Confirm error output does not expose personal data, filesystem paths, or implementation details to visitors.