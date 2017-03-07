function getLength(str) {
  var a=0;
  for(var i=0;i<str.length;i++) {
    a +=  str.charCodeAt(i) > 255 ? 2 : 1;
  }
  return a;
}
var btn=document.getElementById("shuru");
var alertText=document.getElementById("alertText");
var input=document.getElementById("input");
btn.onclick=function() {
  var v=input.value;
  var a=getLength(v);
  if(a==0) {
    input.style.borderColor="red";
    alertText.style.color="red";
    alertText.innerText="姓名不能为空";
  }
  else if(a<4 || a>16) {
    input.style.borderColor="red";
    alertText.style.color="red";
    alertText.innerText="姓名长度必须在4~16";
  }
  else {
    input.style.borderColor="green";
    alertText.style.color="green";
    alertText.innerText="名称格式正确";
  }
}