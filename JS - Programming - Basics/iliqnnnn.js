function demo(input) {
    let countStudents = Number(input[0]);
    let index = 1;
    let counterTop = 0;
    let between4to5 = 0;
    let between3to4 = 0;
    let fail = 0;
    let avg = 0;

    for (let i = index; i < input.length; i++) {
        let grade = Number(input[i]);
        avg+=grade

        if (grade >= 5) {
            counterTop++
        } else if (grade >= 4 && grade <= 4.99) {
            between4to5++
        } else if (grade >= 3 && grade <= 3.99) {
            between3to4++
        } else if (grade >= 2 && grade <= 2.99) {
            fail++
        }

    }
    let topStudents = (counterTop / countStudents) * 100;
    let students4to5 = (between4to5 / countStudents) * 100;
    let students3to4 = (between3to4 / countStudents) * 100;
    let failStudents = (fail / countStudents) * 100;
    let scoreAvg = (avg / countStudents);

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${students4to5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${students3to4.toFixed(2)}%`);
    console.log(`Fail: ${failStudents.toFixed(2)}%`);
    console.log(`Average: ${scoreAvg.toFixed(2)}`);



} demo(["10",
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