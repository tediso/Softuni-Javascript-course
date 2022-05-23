function newHome(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch (type) {
        case "Roses":
            totalSum = count * 5;
            if (count > 80) {
                totalSum = totalSum * 0.90;
            } break;
        case "Dahlias":
            totalSum = count * 3.80;
            if (count > 90) {
                totalSum = totalSum * 0.85;
            } break;
        case "Tulips":
            totalSum = count * 2.80;
            if (count > 80) {
                totalSum = totalSum * 0.85;
            } break;
        case "Narcissus":
            totalSum = count * 3;
            if (count < 120) {
                totalSum = totalSum * 1.15;
            } break;
        case "Gladiolus":
            totalSum = count * 2.50;
            if (count < 80) {
                totalSum = totalSum * 1.20;
            } break;
    
    }
    if (budget >= totalSum){
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);

    }




} newHome(["Roses",
    "55",
    "250"])