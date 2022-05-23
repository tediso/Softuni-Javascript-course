function maidenParty(input) {
    let partyPrice = Number(input[0]);
    let loveWishes = Number(input[1]);
    let roses = Number(input[2]);
    let keychains = Number(input[3]);
    let caricatures = Number(input[4]);
    let surpriseLuck = Number(input[5]);
 
    let loveWishesPrice = 0.60;
    let rosesPrice = 7.20;
    let keychainsPrice = 3.60;
    let caricaturesPrice = 18.20;
    let surpriseLuckPrice = 22;
    let discount = 0;
 
    let total = (loveWishes * loveWishesPrice) + (roses * rosesPrice) + (keychains * keychainsPrice) + (caricatures * caricaturesPrice) + (surpriseLuck * surpriseLuckPrice);
    let articleNumb = loveWishes + roses + keychains + caricatures + surpriseLuck;
 
    if (articleNumb > 25) {
 
        discount = (total * 0.35).toFixed(2);
    }
    let endPrice = total - discount;
    let hosting = endPrice * 0.1
    let profit = endPrice - hosting;
 
    if (profit > partyPrice) {
        console.log(`Yes! ${(profit - partyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(partyPrice - profit).toFixed(2)} lv needed.`);
    }
 
}