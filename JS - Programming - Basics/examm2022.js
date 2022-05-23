function demo(input){
    let moneyTereza = Number(input[0]);
    let moneyWin = Number(input[1]);
    let totalRazhodi = Number(input[2]);
    let moneyGiftNeed = Number(input[3]);

    let spendMoneyTereza = moneyTereza * 5;
    let spendMoneyWin = moneyWin * 5;
    let totalMoneySpend = (spendMoneyTereza + spendMoneyWin) - totalRazhodi;

    if(totalMoneySpend >= moneyGiftNeed){
        console.log(`Profit: ${totalMoneySpend.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(moneyGiftNeed - totalMoneySpend).toFixed(2)} BGN.`);
    }


}demo(["5.12",
"32.05",
"15",
"150"])