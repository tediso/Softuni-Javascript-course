function shopping (input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideo = videocards * 250;
    let priceProcessor = (priceVideo * 0.35) * processor;
    let priceRam = (priceVideo * 0.1) * ram;
    
    let totalMoney = priceVideo + priceProcessor + priceRam;
     
    if (videocards > processor){
        totalMoney = totalMoney * 0.85;
    }
    if (totalMoney <= budget) {
        console.log(`You have ${(budget - totalMoney).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva more!`);
    }


}
shopping(["900",
"2",
"1",
"3"])