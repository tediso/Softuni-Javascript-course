function demo(input){
    let n = Number(input[0]);
    let index = 1;
    let command = input[index]
    let sumGrade = 0;
    let counter = 0;

    while(command !== "Finish"){
        counter++
        let name = command;
        let tempSumGrade = 0;

        for (let i = 0; i < n; i++){
            index++
            let grade = Number(input[index]);
            tempSumGrade+=grade
        }
        let tempAvgGrade = tempSumGrade / n;
        sumGrade+=tempAvgGrade;

        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
        index++
        command = input[index];
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);


}
demo(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])