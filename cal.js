let str="";
let num1,num2,num3,op;


function numbers(n){
	
if(n==="C"){
	str="";
	
}
else{
str=str+n;
}
document.getElementById("t1").value=str;
}


function operators(op1){
num1=parseFloat(str);
str="";
document.getElementById("t1").value="";
op=op1;
}


function Equal() {
  num2 = parseFloat(str);
  if (op === '+')
	  {
    num3 = num1 + num2;
  } else if (op === '-')
	  {
    num3 = num1 - num2;
  } else if (op === '*')
	  {
    num3 = num1 * num2;
  } else if (op === '/')
	  {
    num3 = num1 / num2;
  }
  if (isNaN(num3) || !isFinite(num3)) {
    document.getElementById("t1").value ="Error";
  } else {
    document.getElementById("t1").value = num3.toString();
  }
  str="";
}