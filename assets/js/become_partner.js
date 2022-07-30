//change color of the nav bar when scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "white";
    document.getElementById("header").style.color = "black";
    document.getElementById("header").style["boxShadow"] = "0 0 .5rem 0 black";
  } else {
    document.getElementById("header").style.background = "transparent";
    document.getElementById("header").style["boxShadow"] = "";
  }
}

//form validate
var form = document.login_partner
function signInValidate(){
  return (emailValidate() && passwordValidate());
}

function emailValidate(){
  var email = form.email.value
    var atPos = email.indexOf('@');
    var dotPos = email.lastIndexOf('.');
    var emailAccess = false;

    if(email.trim() == ''){
    document.getElementById('emailMiss').innerHTML = 'Enter the Email Id'
  } else if(atPos<1 || dotPos<atPos+2 || dotPos+2>=email.length ){
    document.getElementById('emailMiss').innerHTML = 'Check the Email Address'
  } else{
    document.getElementById('emailMiss').innerHTML = ''
    emailAccess = true
  }
  return emailAccess;
}

function passwordValidate(){
  var password = form.password.value
  var passAccess =  false;
  if(password.trim() == ''){
    document.getElementById('passMiss').innerHTML = 'Enter the Password'
  }else if(password.trim().length <= 5){
    document.getElementById('passMiss').innerHTML = 'Password must of length 6'
  }else{
    document.getElementById('passMiss').innerHTML = ''
    passAccess = true
  }
  return passAccess;
}