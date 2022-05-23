function calc(input){
let totalPage = Number(input[0]);
let pageForoneHour = Number(input[1]);
let totalDaysforRead = Number(input[2]);

let totalTime = totalPage / pageForoneHour; 
let timeForday = totalTime / totalDaysforRead;

console.log(timeForday);

}
calc(["212","20","2"])