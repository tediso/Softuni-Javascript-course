function demo(input){
    let nameMovie = input[0];
    let countDay = Number(input[1]);
    let countTicket = Number(input[2]);
    let priceMovie = Number(input[3]);
    let procentMovie = Number(input[4]);

    let priceForDay = countTicket * priceMovie;
    let priceForAll = priceForDay * countDay;
    let priceProcent = priceForAll * (procentMovie/100);
    let res = priceForAll - priceProcent;
    console.log(`The profit from the movie ${nameMovie} is ${res.toFixed(2)} lv.`);


}demo
(["The Programmer",
"20",
"500",
"7.50",
"7"])