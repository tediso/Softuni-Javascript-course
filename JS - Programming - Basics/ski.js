function ski(input) {

    let days = Number(input[0]);
    let type = input[1];
    let emotion = input[2]
    let res = 0;

    if (type === "room for one person") {
        days = days - 1;
        if (days < 10 || days <= 15 || days > 15) {
            res = days * 18;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        }
    } else if (type === "apartment") {
        days = days - 1;
        if (days < 10) {
            res = (days * 25) * 0.70;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        } else if (days <= 15) {
            res = (days * 25) * 0.65;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        } else if (days > 15) {
            res = (days * 25) * 0.50;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        }

    } else if (type === "president apartment") {
        days = days - 1;
        if (days < 10) {
            res = (days * 35) * 0.90;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        } else if (days <= 15) {
            res = (days * 35) * 0.85;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        } else if (days > 15) {
            res = (days * 35) * 0.80;
            if (emotion === "positive") {
                res = res * 1.25;
            } else {
                res = res * 0.90;
            }
        }
    }


        console.log((res).toFixed(2));



    } ski(["30",
        "president apartment",
        "negative"])