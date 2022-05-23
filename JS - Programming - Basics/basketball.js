function basketballEquipment(input){

    let priceTrainyear = Number(input[0]);

    let priceShoes = priceTrainyear - (priceTrainyear * ( 40 / 100 ));
    let priceKit = priceShoes - (priceShoes * (20 / 100));
    let priceBall = priceKit / 4;
    let priceAccessoaris = priceBall / 5;

    let totalPrice = priceTrainyear + priceShoes + priceKit + priceBall + priceAccessoaris;
    console.log(totalPrice);

}
basketballEquipment(["365"])