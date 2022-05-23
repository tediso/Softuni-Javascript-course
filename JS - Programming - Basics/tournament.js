function ranklist(input) {

    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {
        let stage = input[index];
        switch (stage) {
            case "W": 
            points += 2000;
            wins++;
            break;
            case "F": points += 1200;
            break;
            case "SF": points += 720;
            break;
        }
    }
    let avgPoints = (points - startingPoints) / tournamentsCount;
    let procent = (wins / tournamentsCount) * 100
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(procent).toFixed(2)}%`);


} ranklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])