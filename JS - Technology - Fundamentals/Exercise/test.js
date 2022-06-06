function solve(input){
   let first = Number(input[0])
   let second = Number(input[1])
   let sum = 0
   
   for(let i = first ;i < second;i++){
   if(i %9===0){
       sum+=i
   }
}
console.log(sum);
for(let b = first;b<second;b++){
    if(b % 9 === 0){
        console.log(b);
    }
}

}

solve(["100", "200"])