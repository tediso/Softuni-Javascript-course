function demo(input){
    let countNum = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= input.length; i++){
        let test = Number(input[i])

        if (test % 2 === 0){
            p1++
        }
        if (test % 3 === 0){
            p2++
        }
        if (test % 4 === 0){
            p3++
        }
    }
    let res1 = (p1 / countNum) * 100;
    let res2 = (p2 / countNum) * 100;
    let res3 = (p3 / countNum) * 100;

    console.log(`${res1.toFixed(2)}%`);
    console.log(`${res2.toFixed(2)}%`);
    console.log(`${res3.toFixed(2)}%`);


}demo(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])