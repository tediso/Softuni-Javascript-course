function demo(input) {
    let countDograma = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let total = 0;

    if (type === "90X130") {
        total = countDograma * 110;
        if (countDograma > 30 && countDograma <= 60) {
            total *= 0.95;
        } else if (countDograma > 60) {
            total *= 0.92;
        }
    } else if (type === "100X150") {
        total = countDograma * 140;
        if (countDograma > 40 && countDograma <= 80) {
            total *= 0.94
        } else if (countDograma > 80) {
            total *= 0.9;
        }
    } else if (type === "130X180") {
        total = countDograma * 190;
        if (countDograma > 20 && countDograma <= 50) {
            total *= 0.93;
        } else if (countDograma > 50) {
            total *= 0.88
        }
    } else if (type === "200X300") {
        total = countDograma * 250;
        if (countDograma > 25 && countDograma <= 50) {
            total *= 0.91;
        } else if (countDograma > 50) {
            total *= 0.86
        }
    }
    if (delivery === "With delivery"){
        total+=60
    } else {
        total = total
    }
    if (countDograma > 99){
        total*=0.96
    } else if (countDograma < 10){
        console.log("Invalid order");
    }
    if (countDograma >= 10){
        console.log(`${total.toFixed(2)} BGN`);
    }


} demo(["40",
    "90X130",
    "Without delivery"])