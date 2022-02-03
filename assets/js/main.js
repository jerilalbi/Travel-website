
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


// Search Map Display
//  (function() {
//   var places = require('places.js');
//   var placesAutocomplete = places({
//     appId: 'S571K2N5CZ',
//     apiKey: '948d97b95f0701dde7b6ac69d1ecb235',
//     container: document.querySelector('#search-input')
//   });

//   var map = L.map('.search-map-box', {
//     scrollWheelZoom: false,
//     zoomControl: false
//   });

//   var osmLayer = new L.TileLayer(
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       minZoom: 1,
//       maxZoom: 13,
//       attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
//     }
//   );

//   var markers = [];

//   map.setView(new L.LatLng(0, 0), 1);
//   map.addLayer(osmLayer);

//   placesAutocomplete.on('suggestions', handleOnSuggestions);
//   placesAutocomplete.on('cursorchanged', handleOnCursorchanged);
//   placesAutocomplete.on('change', handleOnChange);
//   placesAutocomplete.on('clear', handleOnClear);

//   function handleOnSuggestions(e) {
//     markers.forEach(removeMarker);
//     markers = [];

//     if (e.suggestions.length === 0) {
//       map.setView(new L.LatLng(0, 0), 1);
//       return;
//     }

//     e.suggestions.forEach(addMarker);
//     findBestZoom();
//   }

//   function handleOnChange(e) {
//     markers
//       .forEach(function(marker, markerIndex) {
//         if (markerIndex === e.suggestionIndex) {
//           markers = [marker];
//           marker.setOpacity(1);
//           findBestZoom();
//         } else {
//           removeMarker(marker);
//         }
//       });
//   }

//   function handleOnClear() {
//     map.setView(new L.LatLng(0, 0), 1);
//     markers.forEach(removeMarker);
//   }

//   function handleOnCursorchanged(e) {
//     markers
//       .forEach(function(marker, markerIndex) {
//         if (markerIndex === e.suggestionIndex) {
//           marker.setOpacity(1);
//           marker.setZIndexOffset(1000);
//         } else {
//           marker.setZIndexOffset(0);
//           marker.setOpacity(0.5);
//         }
//       });
//   }

//   function addMarker(suggestion) {
//     var marker = L.marker(suggestion.latlng, {opacity: .4});
//     marker.addTo(map);
//     markers.push(marker);
//   }

//   function removeMarker(marker) {
//     map.removeLayer(marker);
//   }

//   function findBestZoom() {
//     var featureGroup = L.featureGroup(markers);
//     map.fitBounds(featureGroup.getBounds().pad(0.5), {animate: false});
//   }
// })(); //

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

//form validation
function validateForm(){
  var form =  document.contact_form
  var name = form.name.value;
  var email = form.email.value;
  var message = form.message.value;

  var atPos = email.indexOf('@');
  var dotPos = email.lastIndexOf('.');

  /* Name Check */
  if(name.trim() == ''){
    document.getElementById('nameMiss').innerHTML = 'Enter the Name'
  }else{    
    document.getElementById('nameMiss').innerHTML = ''
  }

  /* Email Check */
  if(email.trim() == ''){
    document.getElementById('emailMiss').innerHTML = 'Enter the Email'
  }else if(atPos<1 || dotPos<atPos+2 || dotPos+2>=email.length ){
    document.getElementById('emailMiss').innerHTML = 'Check the Email Address'
  }else{
    document.getElementById('emailMiss').innerHTML = ''
  }

  /* Message Check */
  if(message.trim() == ''){
    document.getElementById('messageMiss').innerHTML = 'Enter a Message'
  }else{    
    document.getElementById('messageMiss').innerHTML = ''
  }
  
}

//contact us form email sent 
$("#contact_form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzJH0wVfCk_EPosJTZgnlhZfGJRMNl8ZPfCLSeBn0kuU9jnMJPlGwRJSIGSqvcQFKq1/exec",
      data:$("#contact_form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
      },
      error:function (err){
          alert("Something Error")

      }
  })
})