
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
    return parseFloat(result);
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
    
     let buttons = document.querySelectorAll(".btn");
     let btnCommon = document.querySelectorAll(".com");
     let btnNum = document.querySelectorAll(".num");
     let btnOp = document.querySelectorAll(".btnOp");
     let display = document.querySelector(".label");
    
    let arrA = [];
    let operator = "";
   
    btnOp.forEach(btn => {
        btn.addEventListener('click', () => {
             operator = btn.value;
        display.value = val;
        })   
    })
     function calc(e){ 
        let valOne = e.target.value;
        arrA.push(valOne);
        let strA = arrA.join("");
     
        let splitted;
        if(operator !== ""){
         splitted = strA.split(operator);
        }
        let val = strA;
        console.log(val);
        display.value = `${val}`;
        // console.log({operator});
        const a = parseFloat(splitted[0]);
        let b = parseFloat(splitted[1]);
        console.log({splitted});
        let result = operate(a, `${operator}`, b);
        console.log({result});
      
    }
    buttons.forEach(btn => {
        btn.addEventListener("click", calc)
       });
       