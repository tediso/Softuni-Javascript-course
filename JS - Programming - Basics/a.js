function demo(input) {
    let countPaint = Number(input[0]);
    let countTapets = Number(input[1]);
    let priceForOneGloves = Number(input[2]);
    let priceForOneClean = Number(input[3]);

    let pricePaint = countPaint * 21.50;
    let priceTapets = countTapets * 5.2;
    let countGloves = Math.ceil(countTapets * 0.35);
    let countClean = Math.floor(countPaint * 0.48);
    let priceGloves = countGloves * priceForOneGloves;
    let priceClean = countClean * priceForOneClean;

    let totalSum = priceClean + pricePaint + priceTapets + priceGloves;
    let res = totalSum / 15;
    console.log(`This delivery will cost ${res.toFixed(2)} lv.`);


} demo([10,
    8,
    2.2,
    5])