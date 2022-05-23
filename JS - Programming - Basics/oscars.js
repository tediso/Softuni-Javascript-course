function oscars(input){
    let nameActor = input[0];
    let startingPoints = Number(input[1]);

    for (let index = 3; index < input.length; index++){
    if (index % 2 !== 0){
        let total = input[index].length * Number(input[index + 1]) / 2;
        startingPoints +=total
        if (startingPoints > 1250.5){
            break;
        }
    }
    }
    if (startingPoints < 1250.5){
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`);
    }

}oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])