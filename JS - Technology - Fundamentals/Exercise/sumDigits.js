function solve(num){
    let number = String(num)
    let res = 0
    for(let i = 0; i < number.length;i++){
        let command = Number(number[i])
        res+=command
    }
    console.log(res);
}
solve(245678)