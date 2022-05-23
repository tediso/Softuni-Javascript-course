function demo(input){
    let startNum = Number(input[0])
    let finishNum = Number(input[1])
    let magicNum = Number(input[2])
    let isFound = false
    let numberOne = 0;
    let numberTwo = 0;
    let counter = 0;

    for (let a = startNum; a <=finishNum; a++){
        for (let b = startNum; b <=finishNum; b++){
            counter++
            if(a + b === magicNum){
            numberOne = a;
            numberTwo = b;
            isFound = true
            break;
            
            }
        }
        if(isFound){
            break;
        }
    }
    if (isFound){
        console.log(`Combination N:${counter} (${numberOne} + ${numberTwo} = ${magicNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}demo(["1",
"10",
"5"])