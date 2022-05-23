function demo(input) {
    let dayRest = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let res = 0;

    if (typeRoom === "room for one person") {
        dayRest-=1
        res = dayRest * 18;
        if (dayRest < 10) {
            res;
        } else if (dayRest <= 15) {
            res;
        } else if (dayRest > 15) {
            res;
        }

    } else if (typeRoom === "apartment") {
        dayRest-=1
        res = dayRest * 25;
        if (dayRest < 10) {
            res *= 0.7;
        } else if (dayRest <= 15) {
            res *= 0.65;
        } else if (dayRest > 15) {
            res *= 0.5
        }

    } else if (typeRoom === "president apartment") {
        dayRest-=1
        res = dayRest * 35;
        if (dayRest < 10) {
            res *= 0.9
        } else if (dayRest <= 15) {
            res *= 0.85;
        } else if (dayRest > 15) {
            res *= 0.8
        }

    }
    if (grade === "positive"){
        res*=1.25;
    } else if (grade === "negative"){
        res*=0.9;
    }
    console.log(`${res.toFixed(2)}`);


} demo(["14",
    "apartment",
    "positive"])