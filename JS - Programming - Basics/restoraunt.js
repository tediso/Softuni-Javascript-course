function restaurantdelivery (input){
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegeterianMenu = Number(input[2]);
let procent = 20;

let priceChickenmenu = chickenMenu * 10.35;
let priceFishmenu= fishMenu * 12.40;
let priceVegeterianmenu= vegeterianMenu * 8.15;

let totalPricemenu = priceChickenmenu + priceFishmenu + priceVegeterianmenu;
let priceDesert = totalPricemenu * (procent/100);
let totalPricedelivery = totalPricemenu + priceDesert + 2.50;
console.log(totalPricedelivery);

}
restaurantdelivery(["2", "4", "3", "20"])