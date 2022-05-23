function demo(input){
    let budget = Number(input[0]);
    let total = 0

    for (let i = 1; i < input.length; i+=2){
        let name = input[i];
        let count = input[i + 1];
        let price = name.length;



        if (name !== "Party!"){
            count*=price;
            if (count % 2 === 1){
                count = count * 0.75
            }
            total+=count
        } 
        
    }
    if (total >= budget){
        console.log("Target acquired.");
    } else {
        console.log(`We need ${(budget - total).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${total.toFixed(2)} leva.`);


}demo(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])