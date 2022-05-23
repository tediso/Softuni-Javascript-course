function demo(input){
    let name = input[0];
    let countMeet = Number(input[1]);
    let w = 0;
    let d = 0;
    let l = 0;
    let winPoints = 0;
    let drawPoints = 0;
    

    for (let i = 2; i <= input.length; i++){
        let match = (input[i])
        if (match === "W"){
            w++
            winPoints = w * 3;
        } else if (match === "D"){
            d++
            drawPoints = d * 1
        } else if (match === "L"){
            l++
        }
    }
    let total = winPoints + drawPoints
    if (countMeet === 0){
        console.log(`${name} hasn't played any games during this season.`);
    } else if (countMeet !== 0){
    console.log(`${name} has won ${total} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${((w / countMeet) * 100).toFixed(2)}%`);

    }
    
    

}demo(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])