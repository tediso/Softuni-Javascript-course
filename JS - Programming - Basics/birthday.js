function birthday(input){

    let oldYears = Number(input[0]);
    let priceMachine = Number(input[1]);
    let moneyForToys = Number(input[2]);
    let ToysCount = 0;
    let priceSpending = 0;
    let totalSum = 0;
    let addMoney = 10;
    let stolenMoney = 0

    for (let i = 1; i <= oldYears; i++){
        if (i % 2 === 1){
        ToysCount++
        }
        if (i % 2 === 0){
            priceSpending += addMoney
            stolenMoney++
            addMoney += 10;
            
        }
        
    }
       totalMoneyToys = ToysCount * moneyForToys;
       totalSum = (totalMoneyToys + priceSpending) - stolenMoney
       
       if (totalSum >= priceMachine){
           console.log(`Yes! ${(totalSum - priceMachine).toFixed(2)}`);
       } else {
           console.log(`No! ${(priceMachine - totalSum).toFixed(2)}`);
       }


}birthday(["10","170.00","6"])