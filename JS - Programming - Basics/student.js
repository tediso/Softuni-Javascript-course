function demo(input){
    let countStudents = Number(input[0]);
    let topstudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0
    let avgRes = 0;

    for (let i = 1; i <= countStudents; i++){
        let test = Number(input[i])
        if (test >= 5){
            topstudents++
            avgRes+=test
        } else if (test >= 4 && test < 5){
            between4and5++
            avgRes+=test
        } else if ( test >= 3 && test < 4){
            between3and4++
            avgRes+=test
        } else if (test < 3){
            fail++
            avgRes+=test
        }
    }
    avgRes = (avgRes / countStudents) ;
    console.log(`Top students: ${(topstudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between4and5 / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3and4 / countStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / countStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(avgRes).toFixed(2)}`);



}demo(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])