
var variable_css = document.querySelector(':root');
var variables = getComputedStyle(variable_css);

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
function changeBgImage(image,place_name,place_bio){
  document.getElementById('background_image').src = image;
  document.getElementById('place_name').innerHTML = place_name;
  document.getElementById('place_bio').innerHTML = place_bio;
}

//change color of the nav bar when scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = variables.getPropertyValue('--main-color');
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}