
function operate(...args){
//   let splitted = args.split(" ");
  let firstNum = args[0];
  let sign = args[1];
  let secondNum = args[2];
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
   else{}
}
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
     return a / b;
 }
 let num1 = 21;
 let symbol = "*";
 let num2 = 7;
operate(num1, symbol, num2);

let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", () => console.log(btn.value));
})