function demo(input) {
    let srok = input[0];
    let plan = input[1];
    let mobilenInternet = input[2];
    let meseci = Number(input[3]);
    let total = 0;
    

    if (plan === "Small") {
        if (srok === "one") {
            total += 9.98;
        } else {
            total += 8.58;
        }
    } else if (plan === "Middle") {
        if (srok === "one") {
            total += 18.99;
        } else {
            total += 17.09;
        }
    } else if (plan === "Large") {
        if (srok === "one") {
            total += 25.98;
        } else {
            total += 23.59;
        }
    } else if (plan === "ExtraLarge") {
        if (srok === "one") {
            total += 35.99;
        } else {
            total += 31.79;
        }
    }

    if (mobilenInternet === "yes") {
        if (total <= 10) {
            total += 5.50;
        } else if (total > 10 && total <= 30) {
            total += 4.35;
        } else {
            total += 3.85
        }
    }
    
    if(srok === "two"){
        total*=0.9625
    }

    total*=meseci
    console.log(`${total.toFixed(2)} lv.`);



}
demo(["one",
    "Small",
    "yes",
    "10"])