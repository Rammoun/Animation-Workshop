document.getElementById("last").addEventListener("animationend",ndiv);
//document.getElementById("res").addEventListener("click",reset);
var list=document.getElementsByTagName("div");//console.log(list)//
for (var elt of list){elt.addEventListener("click",reset);} //console.log(elt.className);}
function reset(e){
	var tarclass=e.target.getAttribute("class"); //console.log(tarclass);
	e.target.removeAttribute("class");
	var ncl=document.createAttribute("class");
	ncl.value=tarclass;
	setTimeout(function(){ e.target.setAttributeNode(ncl); }, 35);
}
function ndiv(e){
var anim=document.createAttribute("class");
anim.value="from-js flip";
var newdiv=document.createElement("div"); newdiv.addEventListener("click",reset); newdiv.addEventListener("animationend",description);
var par=document.createElement("p");
var txt=document.createTextNode("I am created by js dom manipulation");
par.appendChild(txt);
newdiv.appendChild(par);
newdiv.setAttributeNode(anim);
//newdiv.style.animation="rotate-clockwise 4s linear 1";
document.getElementById("divs").appendChild(newdiv);
}
function description(e){
	var newdivclass=document.createAttribute("class"); newdivclass.value="css-function";
	var newdiv=document.createElement("div"); newdiv.setAttributeNode(newdivclass);
	var txtclass=document.createAttribute("class");
	txtclass.value="css";
	var txt=document.createElement("code"); txt.setAttributeNode(txtclass);
	var txtclass2=document.createAttribute("class");
	txtclass2.value="function";
	var txt2=document.createElement("code"); txt2.setAttributeNode(txtclass2);
	var inner1=`
	<span class="keyframe">@keyframes</span><span class="name"> flip</span><span class="keys">{<br>
	0% {transform: rotateY(0);}<br>
	50% {transform: rotateY(180deg);}<br>
	100% {transform: rotateY(0);}<br>
	}</span> </code>`;
	var inner2=`	
	<span class="fun">function</span><span class="name"> ndiv()</span>{<br>
	var anim=document.createAttribute("class");<br>
	anim.value="from-js flip";<br>
	var newdiv=document.createElement("div"); newdiv.addEventListener("click",reset);<br> newdiv.addEventListener("animationend",description);<br>
	var par=document.createElement("p");<br>
	var txt=document.createTextNode("I am created by js dom manipulation");<br>
	par.appendChild(txt);<br>
	newdiv.appendChild(par);<br>
	newdiv.setAttributeNode(anim);<br>
	//newdiv.style.animation="rotate-clockwise 4s linear 1";<br>
	document.getElementById("divs").appendChild(newdiv);<br>
	}`;
	txt.innerHTML=inner1;
	txt2.innerHTML=inner2; newdiv.appendChild(txt); newdiv.appendChild(txt2);
	newdiv.style.animation="fade 4s linear 1";
	document.getElementById("divs").appendChild(newdiv);
	
}
