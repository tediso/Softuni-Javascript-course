function demo(arg1){
    let moneyQgoda = Number(arg1[0]);
    let bananaKilogram = Number(arg1[1]);
    let orangeKilogram = Number(arg1[2]);
    let maliniKilogram = Number(arg1[3]);
    let qgodaKilogram = Number(arg1[4]);

    let priceMalini = moneyQgoda * 0.5
    let pricePortokal = priceMalini * 0.6;
    let priceBanani = priceMalini * 0.2;

    let totalMalini = priceMalini * maliniKilogram;
    let totalPortokali = pricePortokal * orangeKilogram;
    let totalBanani = priceBanani * bananaKilogram;
    let totalQgodi = moneyQgoda * qgodaKilogram;

    let res = totalBanani + totalMalini + totalPortokali + totalQgodi
     
    

    console.log(res.toFixed(2));

}demo(["63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"])