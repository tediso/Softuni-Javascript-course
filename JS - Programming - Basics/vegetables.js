function vegetableExchange(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kilogramsVegetables = Number(input[2]);
    let kilogramsFruits = Number(input[3]);
    let totalPrice = (priceVegetables * kilogramsVegetables) + (priceFruits * kilogramsFruits);
    let result = totalPrice / 1.94;
    console.log(result.toFixed(2));
    


}
vegetableExchange(["0.194", "19.4", "10", "10"])