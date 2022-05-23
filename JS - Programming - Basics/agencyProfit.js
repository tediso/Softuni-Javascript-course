function demo(input) {
    let nameAir = input[0];
    let countTicketMan = Number(input[1]);
    let countChildren = Number(input[2]);
    let priceNetoMan = Number(input[3]);
    let taxObslujvane = Number(input[4]);

    let priceChildren = priceNetoMan * 0.3;
    let moneyMan = (priceNetoMan + taxObslujvane) * countTicketMan;
    let moneyChildren = (priceChildren + taxObslujvane) * countChildren;

    let total = (moneyChildren + moneyMan) * 0.2;
console.log(`The profit of your agency from ${nameAir} tickets is ${total.toFixed(2)} lv.`);

} demo(["WizzAir",
    "15",
    "5",
    "120",
    "40"])