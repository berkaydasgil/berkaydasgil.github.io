(function () {
  var STORAGE_KEY = 'berk-theme';
  var html = document.documentElement;

  // Apply saved preference immediately (before paint) to avoid flash
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') html.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    // Inject toggle button
    var btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.setAttribute('title', 'Toggle dark mode');
    updateIcon(btn);
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
      var isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
      }
      updateIcon(btn);
    });
  });

  function updateIcon(btn) {
    var isDark = html.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark ? '☀' : '☽';
  }
})();
