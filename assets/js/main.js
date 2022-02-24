
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
localStorage.setItem('place_lat','52.5200');
localStorage.setItem('place_long','13.4050');
localStorage.setItem('search-check','false')

function changeBgImage(image,place_name,place_bio,lat,long){
  document.getElementById('background_image').src = image;
  document.getElementById('place_name').innerHTML = place_name;
  document.getElementById('place_bio').innerHTML = place_bio;
  localStorage.setItem('place_lat',lat);
  localStorage.setItem('place_long',long);
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

  //map
  function initMap() {
  var map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 10.8505, lng: 76.2711},
    zoom: 2
  });
  var input = document.getElementById('location_search');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }
      marker.setIcon(({
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      localStorage.setItem('place_lat',place.geometry.location.lat());
      localStorage.setItem('place_long',place.geometry.location.lng());
      localStorage.setItem('search-check','true');
  
      var address = '';
      if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
      }
  
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);
  });
}

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

//AIzaSyALAW5alnlxHhyXgZ-UJnZ6xdY12i4vle8