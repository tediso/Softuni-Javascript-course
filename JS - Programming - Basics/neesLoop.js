function demo(input){
    let num = Number(input[0])
    let combinedNum = 0;
for (let a = 0; a <= num; a++ ){
    for (let b = 0; b <= num; b++){
        for (let c = 0; c <= num; c++){
            let product = a + b + c
            if (product === num){
                combinedNum++
            }
        }
    }
    
}
console.log(combinedNum);

}demo([25])