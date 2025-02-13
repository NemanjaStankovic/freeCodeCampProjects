const convertBtn = document.getElementById("convert-btn");
const textInput = document.getElementById("number");
const textOutput = document.getElementById("output");

const convert = () => {
  let num = textInput.value;
  console.log(num);
  if(!num){
    textOutput.innerHTML="Please enter a valid number"
    return;
  }
  if(num<=0)
  {
    textOutput.innerHTML="Please enter a number greater than or equal to 1";
    return;
  }
  if(num>=4000)
  {
    textOutput.innerHTML="Please enter a number less than or equal to 3999";
    return;
  }
  let result = "";
  while(num>=1000)
  {
    result+="M";
    num-=1000;
  }
  while(num>=900)
  {
    result+="CM";
    num-=900;
  }
  while(num>=500)
  {
    result+="D";
    num-=500;
  }
  while(num>=400)
  {
    result+="CD";
    num-=400;
  }
  while(num>=100)
  {
    result+="C";
    num-=100;
  }
  while(num>=90)
  {
    result+="XC";
    num-=90;
  }
  while(num>=50)
  {
    result+="L";
    num-=50;
  }
  while(num>=40)
  {
    result+="XL";
    num-=40;
  }
  while(num>=10)
  {
    result+="X";
    num-=10;
  }
  while(num>=9)
  {
    result+="IX";
    num-=9;
  }
  while(num>=5)
  {
    result+="V";
    num-=5;
  }
  while(num>=4)
  {
    result+="IV";
    num-=4;
  }
  while(num>=1)
  {
    result+="I";
    num-=1;
  }
  textOutput.innerHTML = result;
}

convertBtn.addEventListener("click", convert);