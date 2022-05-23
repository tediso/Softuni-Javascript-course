function yardGreening(input){
let priceSquaremeter = 7.61;
let discount = 18;
let squareMeterlandscaping = Number(input[0]);
let priceEntiregarden = squareMeterlandscaping * priceSquaremeter;
let priceDiscount = ((discount / 100) * priceEntiregarden);
let finalPrice = priceEntiregarden - priceDiscount;
console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${priceDiscount} lv.`);

}
landscapingGardens(["550"])