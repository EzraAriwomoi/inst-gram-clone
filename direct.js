var mline = document.getElementById("magcline");
const splash = document.getElementById("splash-screen");
var disname = document.getElementById("dis_name");
var inputplace = document.getElementById("inp_post");
var bluebt = document.getElementById("btnblue");
var txtwhte = document.getElementById("txtwhte");
var bltrn = document.getElementById("btntnbl");
var ph_dtls = document.getElementById("ph_pst");
var email_head = document.getElementById("email_head");
var phone_head = document.getElementById("phone_head");
var email_display = document.getElementById("email_display");
var contact_display = document.getElementById("contact_display");
var input_search = document.getElementById("input-search");
var countr_cod = document.getElementById("countr_cod");
var ENTIRE_SHEET = document.getElementById("ENTIRE_SHEET");
const btn_num = document.getElementById("btn_num");
const btnclose = document.getElementById("btnclose");

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('dislay-none');
        splash.style.display = "none";
    }, 800);
    setTimeout(()=>{
        mline.style.display = "none";
    }, 1500);
});

function check(){
    if (inputplace.value != ""){
        disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)"
        bluebt.style.opacity = "1"
        txtwhte.style.opacity = "1"

        bluebt.addEventListener('mouseover',function(){
            bluebt.style.backgroundColor = "#1877F2"
          });
          
          bluebt.addEventListener('mouseout',function(){
            bluebt.style.backgroundColor = "rgb(0, 149, 246)"
          });
    }
    else{
        disname.style.transform = "none"
        bluebt.style.opacity = ".3"
        txtwhte.style.opacity = ".5"

        bluebt.addEventListener('mouseover',function(){
            bluebt.style.backgroundColor = "rgb(0, 149, 246)"
          });
          
          bluebt.addEventListener('mouseout',function(){
            bluebt.style.backgroundColor = "rgb(0, 149, 246)"
          });
    }
}

function chck(){
  if (inputplace.value != ""){
    disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)"
    bltrn.style.opacity = "1"
    bltrn.style.cursor = "pointer";
    mail();

    bltrn.addEventListener('mouseover',function(){
      bltrn.style.backgroundColor = "#1877F2"
    });
    
    bltrn.addEventListener('mouseout',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
  }
  else{
    disname.style.transform = "none"
    bltrn.style.opacity = ".7"
    bltrn.style.cursor = "Default";

    gmail.style.display = "block";
    movleft.style.marginLeft = "0px";
    hotmail.style.display = "block";
    outlook.style.display = "block";
    yahoo.style.display = "block";
    yand.style.display = "none"
    q.style.display = "none"
    icld.style.display = "none"
    aool.style.display = "none"
    lv.style.display = "none"
    nver.style.display = "none"
    mssn.style.display = "none"

    bltrn.addEventListener('mouseover',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
    
    bltrn.addEventListener('mouseout',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
  }
}

/**CONTACT sect check input*/
function chckph(){
  if(ph_dtls.value != ""){
    bltrn.style.opacity = "1"
    bltrn.style.cursor = "pointer"
    ph_dtls.style.opacity = "1";

    bltrn.addEventListener('mouseover',function(){
      bltrn.style.backgroundColor = "#1877F2"
    });
    
    bltrn.addEventListener('mouseout',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
  }
  else{
    bltrn.style.opacity = ".7"
    bltrn.style.cursor = "Default"
    ph_dtls.style.opacity = ".5";

    bltrn.addEventListener('mouseover',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
    
    bltrn.addEventListener('mouseout',function(){
      bltrn.style.backgroundColor = "rgb(0, 149, 246)"
    });
  }
}

/**SWITCH BETWEEN CONTACT AND EMAIL */
function switchtoemail(){
  email_head.style.borderBottomColor = "rgb(0, 0, 0)"
  email_head.style.borderBottomStyle = "solid"
  email_head.style.borderBottomWidth = "1px"
  email_head.style.fontWeight = "600";

  phone_head.style.borderBottomColor = "rgb(219, 219, 219)"
  phone_head.style.borderBottomStyle = "solid"
  phone_head.style.borderBottomWidth = "1px"
  phone_head.style.fontWeight = "400";

  email_display.style.display = "block"
  contact_display.style.display = "none";
}

function switchtophone(){
  phone_head.style.borderBottomColor = "rgb(0, 0, 0)"
  phone_head.style.borderBottomStyle = "solid"
  phone_head.style.borderBottomWidth = "1px"
  phone_head.style.fontWeight = "600";

  email_head.style.borderBottomColor = "rgb(219, 219, 219)"
  email_head.style.borderBottomStyle = "solid"
  email_head.style.borderBottomWidth = "1px"
  email_head.style.fontWeight = "400";

  contact_display.style.display = "block"
  email_display.style.display = "none";
}

function search(){
  if(input_search.value != ""){
    input_search.style.opacity = "1"
  }
  else{
    input_search.style.opacity = ".5"
  }

  var filter, MYlst, dv, a, i, txtvalue;
  filter = input_search.value.toUpperCase();
  MYlst = document.getElementById("MYlst");
  dv = MYlst.getElementsByClassName("over-cntry");
  v = MYlst.getElementsByClassName("dif-12");

  for (i = 0; i < dv.length; i++){
    a = dv[i].getElementsByClassName("ctry-cod")[0];
    txtvalue = a.textContent || a.innerText;
    if (txtvalue.toUpperCase().indexOf(filter) > -1){
      dv[i].style.display = "";
    } else {
      dv[i].style.display = "none";
    }
  }
  for (i = 0; i < v.length; i++){
    a = v[i].getElementsByClassName("ctry-cod")[0];
    txtvalue = a.textContent || a.innerText;
    if (txtvalue.toUpperCase().indexOf(filter) > -1){
      v[i].style.display = "";
    } else {
      v[i].style.display = "none";
    }
  }
}
/**+254 */
btn_num.addEventListener('click', Event =>{
  ENTIRE_SHEET.style.opacity = ".9";
  countr_cod.style.position = "absolute";
  countr_cod.style.top = "0"
  countr_cod.style.display = "block";
})

/** X */
btnclose.addEventListener('click', Event =>{
  ENTIRE_SHEET.style.display = "block";
  countr_cod.style.display = "none";
  ENTIRE_SHEET.style.opacity = "1";
})

var gmail = document.getElementById("gmal");
var hotmail = document.getElementById("hotmail");
var outlook = document.getElementById("outlook");
var yahoo = document.getElementById("yahoo");
var yandex = document.getElementById("yandex");
var qq = document.getElementById("qq");
var icloud = document.getElementById("icloud");
var aol = document.getElementById("aol");
var live = document.getElementById("live");
var naver = document.getElementById("naver");
var msn = document.getElementById("msn");

var movleft = document.getElementById("mov");
var yand = document.getElementById("yand");
var q = document.getElementById("q");
var icld = document.getElementById("icld");
var aool = document.getElementById("aool");
var lv = document.getElementById("lv");
var nver = document.getElementById("nver");
var mssn = document.getElementById("mssn");

//@emails onclick

//gmail click
gmail.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  hotmail.style.display = "none";
  outlook.style.display = "none";
  yahoo.style.display = "none";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@gmail.com';
  }
});
//hotmail click
hotmail.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-4px";
  gmail.style.display = "none";
  outlook.style.display = "none";
  yahoo.style.display = "none";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@hotmail.com';
  }
});
//outlook click
outlook.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-8px";
  gmail.style.display = "none";
  hotmail.style.display = "none";
  yahoo.style.display = "none";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@outlook.com';
  }
});
//yahoo click
yahoo.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-12px";
  gmail.style.display = "none";
  hotmail.style.display = "none";
  outlook.style.display = "none";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@yahoo.com';
  }
});
//yandex click
yandex.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";
  gmail.style.display = "none";
  hotmail.style.display = "none";
  outlook.style.display = "none";
  yahoo.style.display = "none"

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@yandex.com';
  }
});
//qq click
qq.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@qq.com';
  }
});
//icloud click
icloud.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@icloud.com';
  }
});
//aol click
aol.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@aol.com';
  }
});
//live click
live.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@live.com';
  }
});
//naver click
naver.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@naver.com';
  }
});
//msn click
msn.addEventListener('click', function handleClick(){
  let atindex = inputplace.value.lastIndexOf('@');

  disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
  bltrn.style.cursor = "pointer";
  bltrn.style.opacity = "1";
  movleft.style.marginLeft = "-16px";

  bltrn.addEventListener('mouseover',function(){
    bltrn.style.backgroundColor = "#1877F2"
  });
  
  bltrn.addEventListener('mouseout',function(){
    bltrn.style.backgroundColor = "rgb(0, 149, 246)"
  });

  if (atindex !== -1){
    inputplace.value = inputplace.value.slice(0, atindex);
  }
  if (!inputplace.value.endsWith('@')){
    inputplace.value += '@msn.com';
  }
});

//end @emails onclick

function mail(){
  if(inputplace.value != ""){
    disname.style.transform = "matrix(0.714, 0, 0, 0.714, 1, -14.424)";
    gm();
  }
  else{
    disname.style.transform = "none"
    gmail.style.display = "block";
    hotmail.style.display = "block";
    outlook.style.display = "block";
    yahoo.style.display = "block";
  }
}
function gm(){
  if(inputplace.value.includes("@g")){
    hotmail.style.display = "none";
    movleft.style.marginLeft = "0px";
    outlook.style.display = "none";
    yahoo.style.display = "none";
  }
  else{
    hm();
  }
}
function hm(){
  if(inputplace.value.includes("@h")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-4px";
    outlook.style.display = "none";
    yahoo.style.display = "none";
  }
  else{
    qaq();
  }
}
function qaq(){
  if(inputplace.value.includes("@q")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    q.style.display = "block";
  }
  else{
    cloud();
  }
}
function cloud(){
  if(inputplace.value.includes("@i") || inputplace.value.includes("@clo")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    icld.style.display = "block";
  }
  else{
    aoool();
  }
}
function aoool(){
  if(inputplace.value.includes("@a")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    aool.style.display = "block";
  }
  else{
    livee();
  }
}
function livee(){
  if(inputplace.value.includes("@l")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    lv.style.display = "block";
  }
  else{
    navrr();
  }
}
function navrr(){
  if(inputplace.value.includes("@n")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    nver.style.display = "block";
  }
  else{
    mmsn();
  }
}
function mmsn(){
  if(inputplace.value.includes("@m")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-16px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
    outlook.style.display = "none";
    mssn.style.display = "block";
  }
  else{
    om();
  }
}
function om(){
  if(inputplace.value.includes("@o")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-8px";
    hotmail.style.display = "none";
    yahoo.style.display = "none";
  }
  else{
    yhm();
  }
}
function yhm(){
  if(inputplace.value.includes("@y") || inputplace.value.includes("@ya")){
    gmail.style.display = "none";
    movleft.style.marginLeft = "-12px";
    hotmail.style.display = "none";
    outlook.style.display = "none";
    yand.style.display = "block";
    
    if(inputplace.value.includes("@yah")){
      gmail.style.display = "none";
      movleft.style.marginLeft = "-12px";
      hotmail.style.display = "none";
      outlook.style.display = "none";
      yand.style.display = "none";
    }
    if(inputplace.value.includes("@yan")){
      gmail.style.display = "none";
      movleft.style.marginLeft = "-16px";
      hotmail.style.display = "none";
      outlook.style.display = "none";
      yahoo.style.display = "none";
    }
  }
  else{
    gmail.style.display = "block";
    movleft.style.marginLeft = "0px";
    hotmail.style.display = "block";
    outlook.style.display = "block";
    yahoo.style.display = "block";
    yand.style.display = "none"
    q.style.display = "none"
    icld.style.display = "none"
    aool.style.display = "none"
    lv.style.display = "none"
    nver.style.display = "none"
    mssn.style.display = "none"
  }
}
inputplace.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete"){
    if(inputplace.value.includes("@y") || inputplace.value.includes("@ya")){
      gmail.style.display = "none";
      movleft.style.marginLeft = "-12px";
      hotmail.style.display = "none";
      outlook.style.display = "none";
      yahoo.style.display = "block";
    }
  }
});

//function to go back to previous page
function GoBack(){
  window.history.back();
}
//attach the function to button
const backButton = document.getElementById("goback");
if (backButton){
  backButton.addEventListener('click', GoBack);
}