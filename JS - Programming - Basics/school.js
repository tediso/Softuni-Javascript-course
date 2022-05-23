function schoolAttribute(input){
    let packsPens = Number(input[0]);
    let packsMarkers = Number(input[1]);
    let packsPreparation = Number(input[2]);
    let procent = Number(input[3]);

    let pricePens = packsPens * 5.80;
    let priceMarkers = packsMarkers * 7.20;
    let pricePreparation = packsPreparation * 1.20;
    let totalPriceattribute = pricePens + priceMarkers + pricePreparation;
    let priceProcent = totalPriceattribute * (procent / 100);
    let res = totalPriceattribute - priceProcent;
    console.log(res);
}
schoolAttribute(["2", "3", "4", "25"])