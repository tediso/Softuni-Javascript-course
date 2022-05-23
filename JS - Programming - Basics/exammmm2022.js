function demo(input) {
    let countComputer = Number(input[0]);
    let prodajbi = 0;
    let avgRating = 0;
    p1 = 0
    p2 = 0
    p3 = 0
    p4 = 0
    p5 = 0

    for (let i = 1; i < input.length; i++) {
        let rating = Number(input[i])
        let lastNum = rating % 10;
        let vuzmojniProdajbi = Math.floor(rating / 10)
        if (lastNum === 2) {
            avgRating+=lastNum
            p1 += vuzmojniProdajbi * 0
        } else if (lastNum === 3) {
            avgRating+=lastNum
            p2 += vuzmojniProdajbi * 0.5
        } else if (lastNum === 4) {
            avgRating+=lastNum
            p3 += vuzmojniProdajbi * 0.7
        } else if (lastNum === 5){
            avgRating+=lastNum
            p4 += vuzmojniProdajbi * 0.85
        } else if (lastNum === 6){
            avgRating+=lastNum
            p5 += vuzmojniProdajbi * 1
        }
    }
    prodajbi = p1 + p2 + p3 + p4 + p5;
    let resR = avgRating / countComputer;
    console.log(`${prodajbi.toFixed(2)}`);
    console.log(`${resR.toFixed(2)}`);
    



} demo(["3",
    "103",
    "103",
    "103"])