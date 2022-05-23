function godzillaVsKong(input){
    let budget = Number(input[0]);
    let countStatist = Number(input[1]);
    let outfitForOne = Number(input[2]);

    let priceDecor = budget * 0.1;
    let priceOutfit = countStatist * outfitForOne;

    if (countStatist > 150){
      priceOutfit *= 0.9;
    }
    let totalSum = priceDecor + priceOutfit;
    if (budget >= totalSum){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    }
    


}godzillaVsKong(["20000", 
"120",
"55.5"])
