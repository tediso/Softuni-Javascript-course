function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let res = 0;
    if (day==="Monday" ||day==="Tuesday" || day==="Wednesday" ||day==="Thursday" ||day==="Friday" ){
        switch(fruit){
            case "banana" : res = count * 2.5;console.log(res.toFixed(2));break;
            case "apple" : res = count * 1.20;console.log(res.toFixed(2));break;
            case "orange" : res = count * 0.85;console.log(res.toFixed(2));break;
            case "grapefruit" : res = count * 1.45;console.log(res.toFixed(2));break;
            case "kiwi" : res = count * 2.7;console.log(res.toFixed(2));break;
            case "pineapple" : res = count * 5.5;console.log(res.toFixed(2));break;
            case "grapes" : res = count * 3.85;console.log(res.toFixed(2));break;
            default : console.log("error");
            }
    } else if ( day === "Saturday" ||day==="Sunday"){
        switch(fruit){
            case "banana" : res = count * 2.7;console.log(res.toFixed(2));break;
            case "apple" : res = count * 1.25;console.log(res.toFixed(2));break;
            case "orange" : res = count * 0.9;console.log(res.toFixed(2));break;
            case "grapefruit" : res = count * 1.6;console.log(res.toFixed(2));break;
            case "kiwi" : res = count * 3.0;console.log(res.toFixed(2));break;
            case "pineapple" : res = count * 5.6;console.log(res.toFixed(2));break;
            case "grapes" : res = count * 4.2;console.log(res.toFixed(2));break;
            default : console.log("error");
        }
    } else {
        console.log("error");
    }
    }


fruitShop(["orange",
"Sunday",
"3"])