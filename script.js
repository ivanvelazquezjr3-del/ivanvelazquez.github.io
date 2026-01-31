// Auto dark mode based on system
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
