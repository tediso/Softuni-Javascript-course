function demo(input) {
    let countPeople = Number(input[0]);
    let season = input[1];
    let res = 0;

    if (season === "spring") {
        if (countPeople <= 5) {
            res = countPeople * 50;
        } else {
            res = countPeople * 48;
        }

    } else if (season === "summer") {
        if (countPeople <= 5) {
            res = countPeople * 48.50;
        } else {
            res = countPeople * 45;
        }

    } else if (season === "autumn") {
        if (countPeople <= 5) {
            res = countPeople * 60;
        } else {
            res = countPeople * 49.50;
        }

    } else if (season === "winter") {
        if (countPeople <= 5) {
            res = countPeople * 86;
        } else {
            res = countPeople * 85;
        }

    }

    if (season === "summer"){
        res*=0.85
    } else if (season === "winter"){
        res*=1.08
    }
    console.log(`${res.toFixed(2)} leva.`);

}
demo
    (["5",
        "spring"])