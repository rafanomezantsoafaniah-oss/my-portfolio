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

const images = document.querySelector(".projet"); 
const total = images.children.length;
    let index = 0;
    const width = 600;
    function showImage(i) {
    images.style.transition = "transform 0.5s ease-in-out";
    images.style.transform = `translateX(-${i * width}px)`;
    index = i;    
}
    function nextImage() {
        showImage(index + 1);
    if(index == total-1){
        setTimeout(() =>{
            images.style.transition = "none";
            images.style.transform = "translateX(0px)";
            index = 0
        },500)
    }
    }
    function prevImage() {
        if(index == 0){
            images.style.transition = "none";
            images.style.transform = "translateX(-${(total - 1)* width}px)";
            index = total - 1;
            setTimeout(() =>{
                prevImage();
            },20)
        }else{showImage(index - 1)}
    }
    // setInterval(() => { nextImage(); },500);