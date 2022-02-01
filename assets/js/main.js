
var variable_css = document.querySelector(':root');
var variables = getComputedStyle(variable_css);

//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.forEach(n => n.classList.toggle("active"));
}
//close menu
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navLink.forEach(n => n.classList.remove("active"));
}

//color change active nav-item
function navColor(e){
  var itm = document.querySelector(".active-itm");
  if(itm !==null){
   itm.classList.remove("active-itm");
  }
 e.target.classList.add("active-itm");
}

//while scroll section active 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-itm')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-itm')
        }
    })
}
window.addEventListener('scroll', scrollActive)

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
    document.getElementById("header").style["boxShadow"] = "0 0 .5rem 0 black";
  } else {
    document.getElementById("header").style.background = "transparent";
    document.getElementById("header").style["boxShadow"] = "";
  }
}

//place option slider
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1,
    modifier: 2,
    slideShadows: false,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});

//circular percentage bar
$(window).on("scroll",function(){
    if($(window).scrollTop() + $(window).height() - 100 >= $(".experience-title-box").offset().top){
      $(function() {
        $('.chart').easyPieChart({
          size: 160,
          barColor: "#00ffff",
          scaleLength: 0,
          lineWidth: 15,
          trackColor: "#001a4d",
          lineCap: "circle",
          animate: 3000,
        });
      });
    }
  }
  );

  //explore  swiper
var Exploreswiper = new Swiper(".exploreSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});