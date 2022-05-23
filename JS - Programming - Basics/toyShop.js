function toyShop(input) {
    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dools = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);




    let priceFortoys = (puzzles * 2.60) + (dools * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let totalToys = puzzles + dools + bears + minions + trucks;

    if (totalToys >= 50) {
        priceFortoys *= 0.75;
    }
    let finalPrice = priceFortoys * 0.90;
    if (finalPrice >= trip) {
        console.log(`Yes! ${(finalPrice - trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip - finalPrice).toFixed(2)} lv needed.`)
    }
}


toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])