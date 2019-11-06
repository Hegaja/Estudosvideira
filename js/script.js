
function post(dir, title, subtitle) {
var bigDiv = document.createElement("div");
bigDiv.className = "col s12 hoverable z-depth-2 champagneColor";
bigDiv.setAttribute("id", "boxed");

firstLink = document.createElement("a");
firstLink.setAttribute("href","estudos/"+dir+".html" );

smallDiv = document.createElement("div");
smallDiv.className = "icon-block";

titleOne = document.createElement("h2");
titleOne.className = "center";
titleOne1 = document.createTextNode(title);
titleOne.appendChild(titleOne1);

titleSec = document.createElement("h3");
titleSec.className = "center light";
titleSec1 = document.createTextNode(subtitle);
titleSec.appendChild(titleSec1);

smallDiv.appendChild(titleOne);
smallDiv.appendChild(titleSec);

firstLink.appendChild(smallDiv);

bigDiv.appendChild(firstLink);

document.getElementById("body").appendChild(bigDiv);

}

post("fakenews1", "Fake News", "Eu sou o que eu faço (Parte 1)");
post("falarever", "Falar e ver", "");
post("foisuamao3", "Foi a Sua mão", "Mãos que salvam (Parte 3)");
post("foisuamao2", "Foi a Sua mão", "Mãos que curam (Parte 2)");
post("foisuamao1", "Foi a Sua mão", "Mãos que amam (Parte 1)");
post("apenasUmaCoisaBoa", "Apenas uma coisa boa", "");
post("estudofe", "Fé - Impossível", "");