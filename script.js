const toggle = document.getElementById('toggle');
const icon = document.getElementById('icon');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggle.classList.add('dark');
   icon.innerHTML=`
    <i class="fas fa-moon"></i>`
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    icon.innerHTML=`
    <i class="fas fa-moon"></i>`
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
    icon.innerHTML=`
    <i class="fas fa-sun"></i>`
  }
});