(() => {
  const SELECTOR = '.water-bg';

  function createWaterBackground(container) {
    const canvas = container.querySelector('.water-canvas');
    if (!canvas || container.dataset.waterInitialized) return;
    container.dataset.waterInitialized = 'true';

    const context = canvas.getContext('2d', { alpha: true });
    const simulationCanvas = document.createElement('canvas');
    const simulationContext = simulationCanvas.getContext('2d');
    const damping = 0.978;
    const resolution = 4;
    const light = [214, 240, 249];
    const dark = [72, 158, 201];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current;
    let previous;
    let pixels;
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let nextDropAt = 0;
    let dropsRemaining = 5;
    let visible = true;
    let drop = null;
    let lastFrameTime = performance.now();
    const startTime = performance.now();

    container.style.position = container.style.position || 'relative';
    if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
    canvas.style.pointerEvents = 'none';
    canvas.style.mixBlendMode = 'multiply';

    function scheduleDrop(time) {
      const isBatch = dropsRemaining > 0;
      nextDropAt = time + (isBatch ? 650 + Math.random() * 550 : 5000 + Math.random() * 3000);
    }

    function resize() {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(bounds.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(bounds.height * pixelRatio));
      width = Math.max(48, Math.floor(bounds.width / resolution));
      height = Math.max(32, Math.floor(bounds.height / resolution));
      simulationCanvas.width = width;
      simulationCanvas.height = height;
      current = new Float32Array(width * height);
      previous = new Float32Array(width * height);
      pixels = simulationContext.createImageData(width, height);
      drop = null;
      dropsRemaining = 8;
      scheduleDrop(performance.now());
      render(performance.now());
    }

    function injectRipple(x, y, strength, radius) {
      const centerX = Math.round(x);
      const centerY = Math.round(y);
      for (let row = -radius; row <= radius; row++) {
        for (let column = -radius; column <= radius; column++) {
          const distance = Math.hypot(column, row);
          const targetRow = centerY + row;
          const targetColumn = centerX + column;
          if (distance > radius || targetRow < 1 || targetRow >= height - 1 || targetColumn < 1 || targetColumn >= width - 1) continue;
          const falloff = (Math.cos((distance / radius) * Math.PI) + 1) * 0.5;
          previous[targetRow * width + targetColumn] -= falloff * strength;
        }
      }
    }

    function spawnDrop(time) {
      if (dropsRemaining === 0) dropsRemaining = 7 + Math.floor(Math.random() * 3);
      dropsRemaining -= 1;
      const targetY = height * (0.35 + Math.random() * 0.5);
      drop = {
        x: width * (0.08 + Math.random() * 0.84),
        y: -6,
        targetY,
        velocity: 0,
        distance: targetY + 6,
        opacity: 1
      };
    }

    function updateDrop(time, frameScale) {
      if (!drop) {
        if (time >= nextDropAt) spawnDrop(time);
        return;
      }
      drop.velocity = Math.min(9, drop.velocity + 0.15 * frameScale);
      drop.y += drop.velocity * frameScale;
      const progress = Math.min(1, (drop.y + 6) / drop.distance);
      drop.opacity = progress > 0.85 ? 1 - ((progress - 0.85) / 0.15) : 1;
      if (drop.y >= drop.targetY) {
        injectRipple(drop.x, drop.targetY, 13, Math.max(3, Math.round(Math.min(width, height) * 0.035)));
        drop = null;
        scheduleDrop(time);
      }
    }

    function update() {
      for (let row = 1; row < height - 1; row++) {
        for (let column = 1; column < width - 1; column++) {
          const index = row * width + column;
          current[index] = ((previous[index - 1] + previous[index + 1] + previous[index - width] + previous[index + width]) / 2 - current[index]) * damping;
        }
      }
      [current, previous] = [previous, current];
    }

    function render(time) {
      const elapsed = (time - startTime) * 0.001;
      const data = pixels.data;
      for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
          const index = row * width + column;
          const left = current[index > 0 ? index - 1 : index];
          const right = current[index < current.length - 1 ? index + 1 : index];
          const up = current[index >= width ? index - width : index];
          const down = current[index < current.length - width ? index + width : index];
          const slope = Math.max(-1, Math.min(1, (left - right + up - down) * 0.08));
          const wind = Math.sin(elapsed * 0.18 + column * 0.035) * 0.9 + Math.sin(elapsed * 0.11 + row * 0.055) * 0.65;
          const amount = Math.max(0, Math.min(1, 0.36 + slope * 0.28 + wind * 0.015));
          const pixel = index * 4;
          data[pixel] = Math.round(light[0] + (dark[0] - light[0]) * amount);
          data[pixel + 1] = Math.round(light[1] + (dark[1] - light[1]) * amount);
          data[pixel + 2] = Math.round(light[2] + (dark[2] - light[2]) * amount);
          data[pixel + 3] = 210;
        }
      }
      simulationContext.putImageData(pixels, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(simulationCanvas, 0, 0, canvas.width, canvas.height);
      if (drop) renderDrop(drop);
    }

    function renderDrop(currentDrop) {
      const scaleX = canvas.width / width;
      const scaleY = canvas.height / height;
      const x = currentDrop.x * scaleX;
      const y = currentDrop.y * scaleY;
      const opacity = currentDrop.opacity;
      const widthPx = Math.max(2.5, 1.1 * scaleX);
      const heightPx = Math.max(7, 3.2 * scaleY);
      const stretch = 1 + Math.min(0.22, currentDrop.velocity * 0.018);

      context.save();
      context.globalAlpha = opacity;
      context.translate(x, y);
      context.scale(1, stretch);

      context.shadowColor = 'rgba(52, 125, 166, 0.3)';
      context.shadowBlur = 2.5 * scaleX;
      context.shadowOffsetY = 1.2 * scaleY;

      const body = context.createRadialGradient(
        -widthPx * 0.36,
        -heightPx * 0.42,
        widthPx * 0.08,
        widthPx * 0.12,
        heightPx * 0.1,
        heightPx
      );
      body.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
      body.addColorStop(0.16, 'rgba(220, 246, 255, 0.96)');
      body.addColorStop(0.52, 'rgba(124, 202, 231, 0.88)');
      body.addColorStop(0.84, 'rgba(55, 139, 184, 0.8)');
      body.addColorStop(1, 'rgba(35, 105, 151, 0.35)');
      context.fillStyle = body;
      context.beginPath();
      context.moveTo(0, -heightPx);
      context.bezierCurveTo(widthPx * 0.88, -heightPx * 0.38, widthPx * 0.9, heightPx * 0.42, 0, heightPx * 0.62);
      context.bezierCurveTo(-widthPx * 0.9, heightPx * 0.42, -widthPx * 0.88, -heightPx * 0.38, 0, -heightPx);
      context.fill();

      context.shadowColor = 'transparent';
      context.strokeStyle = 'rgba(30, 102, 148, 0.48)';
      context.lineWidth = Math.max(0.45, scaleX * 0.1);
      context.stroke();

      const highlight = context.createRadialGradient(
        -widthPx * 0.35,
        -heightPx * 0.5,
        0,
        -widthPx * 0.35,
        -heightPx * 0.5,
        widthPx * 0.55
      );
      highlight.addColorStop(0, 'rgba(255, 255, 255, 0.92)');
      highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
      context.fillStyle = highlight;
      context.beginPath();
      context.ellipse(-widthPx * 0.3, -heightPx * 0.48, widthPx * 0.3, heightPx * 0.2, -0.25, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }

    function frame(time) {
      if (!visible) {
        animationFrame = 0;
        return;
      }
      const frameScale = Math.min(2, Math.max(0.5, (time - lastFrameTime) / 16.667));
      lastFrameTime = time;
      update();
      updateDrop(time, frameScale);
      render(time);
      animationFrame = requestAnimationFrame(frame);
    }

    function setVisibility(isVisible) {
      visible = isVisible;
      if (visible && !reducedMotion && !animationFrame) {
        lastFrameTime = performance.now();
        animationFrame = requestAnimationFrame(frame);
      }
    }

    const observer = new IntersectionObserver((entries) => setVisibility(entries[0].isIntersecting));
    observer.observe(container);
    window.addEventListener('resize', resize, { passive: true });
    resize();
    if (!reducedMotion) animationFrame = requestAnimationFrame(frame);
  }

  function initWaterBackgrounds() {
    document.querySelectorAll(SELECTOR).forEach(createWaterBackground);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initWaterBackgrounds);
  else initWaterBackgrounds();
})();
