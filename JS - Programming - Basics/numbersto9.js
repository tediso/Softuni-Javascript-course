function numbers(input){
    let startNum = Number(input[0]);
    let finishNum = Number(input[1]);
    let res = 0;
    let output = 0;

    for (let i = startNum; i < finishNum; i++){
        if (i % 9 === 0){
            res+=i
             
        }
    }
    console.log(`The sum: ${res}`);
    for (let i = startNum; i < finishNum; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
    
    
    



}numbers(["100", "200"])