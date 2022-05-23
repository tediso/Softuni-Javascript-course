function demo(input){
let priceMore20kg = Number(input[0]);
let kilogramiBagaj = Number(input[1]);
let dayToTrip = Number(input[2]);
let countBagaj = Number(input[3]);
let taxi = 0;

if (kilogramiBagaj < 10){
taxi = priceMore20kg * 0.2;
} else if (kilogramiBagaj <= 20){
taxi = priceMore20kg * 0.5;
} else if (kilogramiBagaj > 20){
taxi = priceMore20kg;
}

if (dayToTrip < 7){
taxi*=1.4;
} else if (dayToTrip <= 30){
taxi*=1.15;
} else if (dayToTrip > 30){
taxi*=1.10;
}
let res = taxi * countBagaj

console.log(`The total price of bags is: ${res.toFixed(2)} lv.`);

}demo(["30",
"18",
"15",
"2"])