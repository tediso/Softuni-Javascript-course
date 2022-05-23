function demo(input){
    let djobniTereza = Number(input[0]);
    let pechalbaDen = Number(input[1]);
    let razhodiTereza = Number(input[2]);
    let priceGift = Number(input[3]);

    let spendMoneyDjobni = djobniTereza * 5;
    let winMoney = pechalbaDen * 5;
    let totalSpendMoney = spendMoneyDjobni + winMoney;
    let res = totalSpendMoney - razhodiTereza;

    if(res >= priceGift){
        console.log(`Profit: ${res.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(priceGift - res).toFixed(2)} BGN.`);
    }


}demo(["5.12",
"32.05",
"15",
"150"])