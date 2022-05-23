function hotel(input){
    let month = input[0];
    let day = Number(input[1]);
    let priceStudio = 0;
    let priceApartament = 0;

    if (month === "May" || month === "October"){
    if (day > 7 && day <= 14){
        priceStudio = (50 * day) * 0.95;
        priceApartament = 65 * day;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    } else if (day > 14){
        priceStudio = (50 * day) * 0.70;
        priceApartament = (65 * day) * 0.90;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    } else if (day <= 7){
    priceStudio = 50 * day;
    priceApartament = 65 * day;
    console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    }
    } else if (month === "June" || month === "September"){
    if (day > 14){
        priceStudio = (75.20 * day) * 0.80;
        priceApartament = (68.70 * day) * 0.90;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    } else if (day <= 14){
        priceStudio = 75.20 * day;
        priceApartament = 68.70 * day;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    }
    } else if (month === "July" || month === "August"){
    if (day > 14){
        priceStudio = 76 * day;
        priceApartament = (77 * day) * 0.90;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    } else if (day <= 14){
        priceStudio = 76 * day;
        priceApartament = 77 * day;
        console.log(`Apartment: ${(priceApartament).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
    }
    }





}hotel(["May",
"15"])