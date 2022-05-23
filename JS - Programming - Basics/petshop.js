function petShop(input){
    let numberPacksfoodDog = input[0];
    let numberPacksfoodCat = input[1];
    let priceFooddog = 2.50;
    let priceFoodcat = 4;
    let necessaryExpenses = (numberPacksfoodDog * priceFooddog) + (numberPacksfoodCat * priceFoodcat);
    console.log(necessaryExpenses);

}
petShop(["5", "4"])