function add(a, b){
    return a + b;
    }
    function sub(a, b){
        return a - b;
    }
    function mul(a, b){
        return a * b;
     }
    function div(a, b){
        if (b === 0) {
        display.classList.add("overSize");
        return "Error";
        }
         return a / b;
     }
function operate(firstNum, sign, secondNum){
    let result;
    if(sign === "+"){
     result = add(firstNum, secondNum)
    }
    else if(sign === "-"){
        result = sub(firstNum, secondNum)
       }
    else if(sign === "*"){
        result = mul(firstNum, secondNum)
       }
    else if(sign === "/"){
        result = div(firstNum, secondNum)
       }
    return result;
    }
     let buttons = document.querySelectorAll(".btn");
     let display = document.querySelector(".label");
     display.value = "0";

let strExpression = "";
function calc(e){ 
    let val = e.target.value;
    if (!isNaN(val) || val === "." || "+-*/".includes(val)) {
        strExpression += val;
        display.value = strExpression;
    }
    if (val === "backSpace") {
        let arr = strExpression.split("");
        arr.pop();
        strExpression = arr.join("");
        display.value = strExpression;
    }
    if (strExpression.length >= 10) {
        display.classList.add("overSize");
    }
    if (val === "=") {
        const ans = calcExpression(strExpression);
        let result = parseFloat(ans.toFixed(3));
        display.value = result.toLocaleString();
        // to use the result as a first number on the screen if the user continues to enter no.
        strExpression = result.toString();        
    }
    if (val === "Clear") {
     display.value = "";
     strExpression = ""; 
     display.classList.remove("overSize");
     display.value = "0";
     collectedKeys = '';
     display.addEventListener("click", labelInitialDisplay);             
    }
}

function calcExpression(exp){
// return an array [num, op, num, op, num....]
   const parts = exp.match(/(\d+(\.\d+)?|[+\-*/])/g);
   let result;
// for negative number calculations
   if (parts[0] === "-") {
      result = parseFloat(parts[0] + parts[1]);
      for (let i = 2; i < parts.length; i = i + 2){
         let numTwo = parseFloat(parts[i + 1]);
         let op = parts[i];
         result = operate(result, op, numTwo);
       }
    }
   else {
      result = parseFloat(parts[0])
      for (let i = 1; i < parts.length; i = i + 2){
        let numTwo = parseFloat(parts[i + 1]);
        let op = parts[i];
        result = operate(result, op, numTwo);
       }
    }
    if (isNaN(result) && result !== "Error") {
      display.value = "Syntax Error!!!";
      display.classList.add("overSize");
     }
    else if (result === "Error") {
    display.value = "Invalid Syntax division by 0";
     }
    else{
    let finalResult = parseFloat(result); 
     return finalResult;
    }
}

buttons.forEach(btn => {
        btn.addEventListener("click", calc)
       });

let collectedKeys = '';
function labelInitialDisplay(){
    display.value = ""; 
    display.removeEventListener("click", labelInitialDisplay);
}
display.addEventListener("click", labelInitialDisplay);   
// keyboard support          
display.addEventListener("keydown", (e)=>{
  const keyPressed = e.key;
  if (keyPressed === 'Backspace') {
    collectedKeys = collectedKeys.slice(0, -1); // Remove the last character
   } 
  else if (keyPressed.length === 1) {
    // Add only printable characters
    collectedKeys += keyPressed;
   }
  else if (e.key === "Enter") {
    const ans = calcExpression(strExpression);
    let result = parseFloat(ans.toFixed(3));
    console.log(typeof(result));
    display.value = result.toLocaleString();
}
  if (collectedKeys.length >= 10) {
    display.classList.add("overSize");
   }
strExpression = collectedKeys;
})      