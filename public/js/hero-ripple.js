(function () {
  document.querySelectorAll('.ripple-btn').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      var rect = btn.getBoundingClientRect();
      var diameter = Math.max(rect.width, rect.height) * 1.6;
      var radius = diameter / 2;
      var ripple = document.createElement('span');
      ripple.classList.add('ripple-circle');
      ripple.style.width = diameter + 'px';
      ripple.style.height = diameter + 'px';
      ripple.style.left = (event.clientX - rect.left - radius) + 'px';
      ripple.style.top = (event.clientY - rect.top - radius) + 'px';
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });
})();