const toggleBtn = document.getElementById('modeToggle');
  const icon = document.getElementById('icon');
  // Function manova ny mode sy icon
  function setMode(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      icon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      icon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  }
  // Handler rehefa tsindriana ilay bouton
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setMode(!isDark);
  });
 // Check localStorage amin'ny load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    setMode(savedTheme === 'dark');
  });