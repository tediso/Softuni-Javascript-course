function demo(input){
   let index = 0;
   let countNegativeGrades = Number(input[index]);
   index++

   let command = input[index];
   index++
   let currentNegativeGrade = 0;
   let sumGrade = 0;
   let countProblems = 0;
   let lastProblem = "";
   let isNeedBreak = false;


   while(command !== "Enough"){
       let problemName = command;
       let grade = Number(input[index]);
       index++

       lastProblem =problemName
       countProblems++
       sumGrade+=grade

       if (grade <= 4){
currentNegativeGrade++
       }
       if (currentNegativeGrade === countNegativeGrades){
           console.log(`You need a break, ${currentNegativeGrade} poor grades.`);
           isNeedBreak = true
           break;
       }

       command = input[index]
       index++
   }
   
   if (!isNeedBreak){
    let avgGrade = sumGrade / countProblems;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${countProblems}`);
    console.log(`Last problem: ${lastProblem}`);
   }




}demo(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])