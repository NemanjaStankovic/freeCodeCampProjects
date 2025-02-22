let price = 19.5;
let cid = [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];
let obj = [{"br":0.01},{"br":0.05},{"br":0.1},{"br":0.25},{"br":1.00},{"br":5.00},{"br":10.00},
{"br":20.00},{"br":100.00}];

const input = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click",()=>{
  const inputValue = Number(Number(input.value).toFixed(2));
  if(inputValue<price)
  {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if(inputValue==price)
  {
    changeDue.innerHTML="No change due - customer paid with exact cash";
    alert("No change due - customer paid with exact cash");
    return;
  } 
  let outputString="";
  let change = Number((inputValue-price).toFixed(2));
  for(let index = cid.length - 1; index>=0; index--)
  {
    let oldChange = change;
     while(change>=obj[index].br && cid[index][1]>0)
    {
      change=Number((change-obj[index].br).toFixed(2));
      cid[index][1]=Number((cid[index][1]-obj[index].br).toFixed(2));
    }
    let difference = Number((oldChange-change).toFixed(2));
    outputString+=(difference!=0)?`${cid[index][0]}: \$${difference.toFixed(2)} `:"";
  }
  if(change>0)
  {
    outputString = "Status: INSUFFICIENT_FUNDS";
  }
  else if(cid.every((el, index)=>el[1]==0))
  {
    outputString = "Status: CLOSED "+outputString;
  }
  else
  {
      outputString = "Status: OPEN "+outputString;
  }
  console.log(outputString);
  changeDue.innerHTML=outputString;
  });
