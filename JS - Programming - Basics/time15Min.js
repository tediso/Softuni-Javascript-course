function demo(input) {
    let hours = Number(input[0]);
    let min = Number(input[1]) + 15;

    if ( min > 59){
        hours = hours + 1;
        min = min - 60;
    }
    if (hours > 23){
        hours = hours - 24;
    }
    if ( min < 10){
        console.log(`${hours}:0${min}`);
    }else {                 
        console.log(`${hours}:${min}`);
    }

    }
    demo(["1", "46"]);