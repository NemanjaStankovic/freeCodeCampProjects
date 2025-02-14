const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const formatInput = (str) => {
  const regex = /[\p{P}\p{S}\s]/gu;
  str = str.replace(regex,"");
  return str.toLowerCase();
}
const checkPalindrom = () => {
  var originalText = textInput.value;
  var textForChecking = originalText;
  if(textForChecking=="")
  {
    alert("Please input a value");
    return;
  }
  textForChecking=formatInput(textForChecking);
  let halfLength = Math.floor(textForChecking.length/2);
  for(let i = 0; i < halfLength; i++)
  {
    if(textForChecking[i]!=textForChecking[textForChecking.length-i-1])
    {
      result.innerText = `${originalText} is not a palindrome`;
      return;
    }
  }
  result.innerText = `${originalText} is a palindrome`;
  console.log(halfLength);
}
checkBtn.addEventListener("click", checkPalindrom);