var btnapp = document.getElementById("btnapp");
var login = document.getElementById("login");
var mline = document.getElementById("magcline");
const splash = document.getElementById("splash-screen");

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('dislay-none');
        splash.style.display = "none";
    }, 800);
    setTimeout(()=>{
        mline.style.display = "none";
    }, 3000);
})

//app button
btnapp.addEventListener('mouseover',function(){
    btnapp.style.backgroundColor = "#1877F2";
});

btnapp.addEventListener('mouseout', function(){
    btnapp.style.backgroundColor = "rgb(0, 149, 246)";
});

//login mouseover
login.addEventListener('mouseover', function(){
    login.style.color = "rgb(0, 55, 107)";
});

login.addEventListener('mouseout', function(){
    login.style.color = "rgb(0, 149, 246)";
});