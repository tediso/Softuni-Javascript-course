function fishing(input){
    let budget = Number(input[0]);
    let type = input[1];
    let countFisher = Number(input[2]);
    let totalSum = 0;

    switch(type){
        case "Spring" : totalSum = 3000;break;
        case "Summer" : totalSum = 4200;break;
        case "Autumn" : totalSum = 4200;break;
        case "Winter" : totalSum = 2600;break;
    }

        if (countFisher <= 6){
            totalSum = totalSum * 0.90;
        } else if (countFisher >= 7 && countFisher <= 11){
            totalSum = totalSum * 0.85;
        } else if (countFisher >= 12){
            totalSum = totalSum * 0.75;
        }
     if (countFisher % 2 === 0 && type !== "Autumn"){
        totalSum = totalSum * 0.95;
    }
    if (budget >= totalSum){
        console.log(`Yes! You have ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva.`);
    }



}fishing(["3000",
"Summer",
"11"])