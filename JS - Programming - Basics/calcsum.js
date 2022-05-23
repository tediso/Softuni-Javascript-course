function sumSec(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let minuteSec = Math.floor (totalTime / 60);
    let second = totalTime % 60;


}
sumSec(["35", "45", "44"])