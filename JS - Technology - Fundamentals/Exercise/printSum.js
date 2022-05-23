function solve(num1,num2){
    let total = 0
    let text = ''
    for(let i = num1; i <= num2;i++){
        total+=i
        text += `${i} `
    }
    console.log(text);
    console.log(`Sum: ${total}`);

}
solve(5, 10)