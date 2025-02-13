const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const numberRegex = /^(1[\s]?)?((\(\d{3}\)[\s]?)|(\d{3}[-\s]?))\d{3}[-\s]?\d{4}$/;
                                // (555)555        


const checkNumber = () =>{
  if(!userInput.value){
    alert("Please provide a phone number");
    return;
  }
  resultsDiv.innerText=numberRegex.test(userInput.value)?"Valid US number: "+userInput.value:"Invalid US number: "+userInput.value;
}

const clearInput = () => resultsDiv.textContent="";

checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", clearInput);