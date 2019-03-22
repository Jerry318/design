// JavaScript Document
function cs(cssfile,img){
var tar=document.getElementById("tar");
var yl=tar.href.toString();
var ind=yl.indexOf("sk");
var xll=yl.substr(ind+2,1).toString()
//alert(xll);
document.getElementById("bsa"+xll).src="images/bs"+xll+"_1.jpg";
tar.href=cssfile+"/images/style.css";
var t1=img.src;
var t2=t1.split("/");
var t3=t2[t2.length-1];
var t4=t3.charAt(2);
img.src="images/bs"+t4+"_2.jpg";

}