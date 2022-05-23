function demo(input){
    let budget = Number(input[0]);
    let counter = 0;
    let total = 0

    for (let i = 2; i < input.length; i+=2){
        let money = Number(input[i]);
        counter++
        if (i % 3 === 0){
            money/=2
        }
        total+=money
        if (total > budget){
            console.log("You don't have enough money!");
            console.log(`You need ${(total - budget).toFixed(2)} leva!`);
            break;
        }
        
    }
    if (budget >= total){
        console.log(`You bought ${counter} products for ${total.toFixed(2)} leva.`);
    }


    
    
    
   


}demo(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"])