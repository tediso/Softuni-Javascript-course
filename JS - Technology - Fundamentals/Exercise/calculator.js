function solve(num1,operator,num2){
    let res = 0
   if(operator === '+'){
       res = num1 + num2
   } else if(operator === '-'){
       res = num1 - num2
   } else if (operator === '/'){
       res = num1 / num2
   } else if(operator === '*'){
       res = num1 * num2
   }
   console.log(res);
}
solve(5,
    '+',
    10)