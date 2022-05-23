function demo(input){
    let budget = Number(input[0]);
    let needPetrol = Number(input[1]);
    let day = input[2];

    let ekskurzovod = 100;
    let priceForLiter = 2.10;

    let moneyForPetrol = needPetrol * priceForLiter;
    let moneyTrip = moneyForPetrol + ekskurzovod;

    if(day === "Sunday"){
        moneyTrip = moneyTrip * 0.80;
    } else if (day === "Saturday"){
        moneyTrip = moneyTrip * 0.90;
    }
    if (budget >= moneyTrip){
        console.log(`Safari time! Money left: ${(budget - moneyTrip).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(moneyTrip - budget).toFixed(2)} lv.`);
    }


}demo(["1000",
"10",
"Sunday"])