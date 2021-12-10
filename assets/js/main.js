
const navMenu = document.getElementById('nav_menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav_close')

//show menu
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

//close menu
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

//remove menu icon
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//change home bg image

function changeBgImage(image,place_name){
  document.getElementById('background_image').src = image;
  document.getElementById('place_name').innerHTML = place_name;
}