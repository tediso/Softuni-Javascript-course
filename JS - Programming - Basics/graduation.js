function demo ( input){
    let index = 0;
    let name = input[index]
    index++

    let i = 1;
    let sumGrade = 0;
    let badGrade = 0
    let isExcluded = false;

    while (i <= 12){
        let grade = Number(input[index]);
        index++

        if (grade < 4.00){
            badGrade++
            if (badGrade > 1){
                isExcluded = true;
                break;
            }
            continue;
        }
        sumGrade+=grade
        i++

    }
    if (!isExcluded){
        let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${i} grade`);
    }
    

}demo(["Gosho",
"5",
"5.5",
"6",])