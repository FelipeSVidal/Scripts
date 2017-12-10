// ==UserScript==
// @name       Fake
// @include  https://*screen=place*
// ==/UserScript==

  var tempo = 400;
  var x = 0;  

javascript:
var FakesPorAldeia  = 1 ;
var sp = 0;
var sw = 0;
var ax = 0;
var scout = 0;
var lc = 0;
var hv = 0;
var cat = 0;
var ra = 1;
var coords = '418|591 418|590 419|590 422|592 423|593 423|596 421|598 421|595 425|593 425|601 426|600 428|602 429|600 427|603 429|605 430|596 429|594 429|592 428|592 427|591 426|590 433|589 434|590 433|590 432|591 433|591 431|592 435|591 434|592 433|593 432|594 434|594 434|596 435|596 438|591 437|591 438|598 437|598 438|597 439|596 430|588 433|586 432|587 434|585 435|585 434|584 433|584 433|583 437|585 436|585 438|585 439|584 438|584 432|581 435|579 435|580 437|579 437|578 438|577 436|577 439|577 440|576 438|575 437|576 436|576 434|576 434|575 435|575 436|574 437|574 438|574 436|573 437|573 444|574 444|575 442|576 442|577 441|578 441|577 441|576 441|575 439|567 440|567 440|568 439|568 439|570 438|569 438|571 440|571 441|571 442|571 443|571 442|572 442|573 440|573 440|572 441|573 445|570 444|570 440|562 439|562 438|562 437|561 434|562 439|560 441|559 442|560 442|561 443|555 443|556 442|556 440|555 444|554 445|555 438|554 436|556 437|556 433|551 433|552 439|551 440|550 438|548 437|549 434|546 420|553 422|552 422|551 421|551 420|551 420|550 426|547 423|548 422|548 430|547 431|546 431|545 429|543 433|544 433|545 434|544 434|543 435|543 425|540 424|539 425|538 424|537 423|537 422|535 423|535 424|535 424|534 426|535 427|534 426|533 429|533 430|531 432|530 434|530 435|530 436|530 437|530 437|529 435|533 437|533 437|537 438|536 433|527 435|521 441|524 442|522 441|522 434|518 436|518 436|517 436|516 433|516 437|515 417|534 418|534 419|534 420|531 421|531 423|530 424|530 424|528 426|530 428|527 423|526 422|527 419|527 417|528 417|527 417|526 419|525 420|524 420|522 421|522 421|523 423|522 424|523 427|524 428|523 429|522 429|521 430|523 431|521 430|525 432|527 425|515 423|515 420|517 422|518 420|518 419|519 419|518 418|517 417|517 416|518 417|521 418|521 416|522 420|522 421|522 421|523 420|524 419|525 419|527 417|526 422|527 423|526 423|522 424|520 430|515 427|517 426|519 425|519 427|519 428|519 429|519 429|521 429|522 428|523 430|523 431|521 432|519 432|518 433|517 433|516 432|516 431|518 430|516 429|516 433|514 434|514 435|514 436|514 437|515 437|516 437|517 437|518 436|518 436|517 436|516 435|517 435|518 434|518 435|521 434|521 433|522 436|522 437|522 437|520 437|524 438|525 438|527 433|528 433|527 432|527 430|525 429|528 432|530 434|530 435|530 436|530 437|530 438|530 438|529 441|529 441|528 442|528 442|527 442|526 442|525 443|524 441|524';
var doc = document;
var url = document.URL;
var cookieName = "f1armeruk";
var cookieNameTent = "tent1cookie";
var maxTentativas = 150;
var data;
var h2 = document.getElementsByTagName('h2');
var Praca = true;
var EnviarAtaque = true;
for (i = 0; i < h2.length; i++) { 
  if (h2[i].innerHTML == "Praça de Reuniões (nível 1)") {  
    Praca = true; 
  }else if(h2[i].innerHTML.search("Confirmar ataque a") != -1){  
    EnviarAtaque=true; 
  }
}
if (Praca == EnviarAtaque)var tentCookie = document.cookie.match('(^|;) ?' + cookieNameTent + '=([^;])(;|$)');  
if (tentCookie != null) {   
  var numTentativas = parseInt(tentCookie[2]);  
} else {   
  data = new Date(2019, 11, 11);   
  document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();   
  var numTentativas = 0;  
}if (Praca){ 
  if (document.getElementsByClassName("error_box")[0] != undefined){  
    var erroFaltaUnid = document.getElementsByClassName("error_box");  
    for (i = 0; i < erroFaltaUnid.length && !found; i++) {   
      if (erroFaltaUnid[i].innerHTML.search("Não existem unidades suficientes") != -1) {    
        document.getElementById("village_switch_right").click();              throw ''  
      } 
    } 
  } 
  if (doc.forms[0].x.value != ""){  
    var index = 0;  farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;])(;|$)');  
    if (farmcookie != null) {   
      index = parseInt(farmcookie[2]);  
    }  
    if (index >= coords.length) {   
      index = 0;  
    }  
    index = index + 1;  
    cookie_date = new Date(2019, 11, 11);  
    document.cookie = cookieName + "=" + index + ";
    expires="" + cookie_date.toGMTString();  
    var link = document.getElementsByClassName("quickbar_link");  
    for (i = 0; i < link.length; i++){   
      if (link[i].href.search(/screen=place/) != -1) {    
        window.location.href = link[i].href;   
      }  
    }  
  }else{  
    if (window.frames.length > 0) {   
      doc = window.main.document;  
    }  
    url = document.URL;  
    coords = coords.split(" ");  
    var index = 0;  
    farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');  
    if (farmcookie != null) {   
      index = parseInt(farmcookie[2]);  
    }  
    if (index >= coords.length) {   
      index = 0;  
    }  
    if (document.getElementsByClassName("command-list-count") [0] != undefined){  
      var numAtaques = document.getElementsByClassName("command-list-count") [0].innerHTML;  
    }else {   
      var numAtaques = 0;  
    }  
    if (numAtaques < FakesPorAldeia){   
      if (numTentativas <= maxTentativas){    
        coords = coords[index];    
        coords = coords.split("|");    
        index = index + 1;    
        cookie_date = new Date(2019, 11, 11);    
        document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();    
        doc.forms[0].x.value = coords[0];    
        doc.forms[0].y.value = coords[1];    
        doc.forms[0].spy.value = scout;    
        doc.forms[0].spear.value = sp;    
        doc.forms[0].sword.value = sw;    
        doc.forms[0].axe.value = ax;    
        doc.forms[0].spy.value = scout;    
        doc.forms[0].light.value = lc;    
        doc.forms[0].heavy.value = hv;    
        doc.forms[0].ram.value = ra;    
        doc.forms[0].catapult.value = cat;    
        document.forms[0].attack.click();   
      }else{    
        data = new Date(2019, 11, 11);    
        document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();    
        document.getElementById("village_switch_right").click();   
      }  
    }else{   
      document.getElementById("village_switch_right").click();  
    } 
  }
} else if (EnviarAtaque){ 
  var BNCheck = document.getElementsByClassName("error"); 
  var found = true; 
  for (i = 0; i < BNCheck.length && !found; i++) {  
    if (BNCheck[i].innerHTML == "lol!") {   
      found = true;  
    } 
  } if (found){  
    var link = document.getElementsByClassName("quickbar_link");  
    for (i = 0; i < link.length; i++){   
      if (link[i].href.search(/screen=place/) != -1) {    
        numTentativas = numTentativas + 10;    
        data = new Date(2019, 11, 11);    
        document.cookie = cookieNameTent + "=" + numTentativas + ";expires=" + data.toGMTString();    
        window.location.href = link[i].href;    
      }  
    } 
  }else{ 
    docs.forms[0].troop_confirm_go.click(); 
  }
} else { 
  alert("Corra o script apartir da praça de reuniões");
};
doc=document;
if(window.frames.length>0)doc=window.main.document;url=document.URL;
if(url.indexOf('try=confirm')>1){
  doc.forms[0].troop_confirm_go.click();
} doc.forms[0].attack.click();
