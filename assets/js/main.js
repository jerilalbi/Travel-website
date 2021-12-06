//navigation bar
const hambeger = document.querySelector('.hamberger')
const navlist = document.querySelector('.nav-list')

hambeger.addEventListener('click',()=>{
    navlist.classList.toggle("open");
})