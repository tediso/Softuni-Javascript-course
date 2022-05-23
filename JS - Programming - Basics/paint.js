function painted(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let priceNylon = (nylon + 2) * 1.50
    let pricePaint = (paint + (10 / 100) * paint) * 14.50;
    let priceThinner = thinner * 5;

    let totalAttribute = priceNylon + pricePaint + priceThinner + 0.40;
    let priceWork = totalAttribute * (30 / 100) * hoursWork;
    let result = totalAttribute + priceWork;
    console.log(result);

}
painted(["10", "11", "4", "8"])