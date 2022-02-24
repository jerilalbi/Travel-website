var e = document.getElementById("bookVideo");
e.style.opacity = 0;

var vid = document.getElementById("bookVideo");
vid.oncanplaythrough = function() {
    setTimeout(function() {
        var e = document.getElementById('bookVideo');
        fade(e);
    }, 0);
};

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1000);
}

var speed = 5000; 
var t = setInterval(function(){
  var slideSource = document.getElementById('text-box');
  slideSource.classList.toggle('fade');
  slideSource.innerHTML = `${localStorage.getItem('place_name')} Trip Booked`;
}, speed);

var twilio = require('twilio');
var client = new twilio('ACa4dc45327a8b1e273a1015066194212e', 'c586ef510e3f0097c8410cdff12490d8');

client.messages.create({
    to: '+918075041750',
    from: '+19034857307',
    body: 'Thank you for booking Liverpool trip'
  });