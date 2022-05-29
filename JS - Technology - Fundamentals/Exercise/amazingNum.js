function solve(num){
let number = String(num);
let res = 0
for(let i = 0; i < number.length;i++){
    let command = Number(number[i]);
    res+=command
}
let result = res.toString().includes(9)
console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);



}
solve(1233)