function godzillaKong(input) {
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let priceDecor = budget * 0.1;
    let priceOutfit = statist * outfitPrice;

    if (statist > 150) {
        priceOutfit = priceOutfit * 0.9;
    }
    let totalMoneymovie = priceDecor + priceOutfit;

    if (budget >= totalMoneymovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoneymovie).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoneymovie - budget).toFixed(2)} leva more.`);
    }



}
godzillaKong(["9587.88",
    "222",
    "55.68"])







