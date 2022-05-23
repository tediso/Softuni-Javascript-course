function areaOffigures(input){
    let type = input[0];
    let a = Number(input[1]);
    // square, rectangle, circle or triangle
    if (type === "square"){
    let a = Number(input[1]);    
    let res = a * a;
    console.log(res.toFixed(3));
    } else if (type === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let res = a * b;
        console.log(res.toFixed(3));
    } else if ( type === "circle"){
        let a = Number(input[1]);
        let res = a * a * Math.PI;
        console.log(res.toFixed(3));
    } else {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let res = (a * b) / 2;
        console.log(res.toFixed(3));

    }


}
areaOffigures(["triangle",
"4.5",
"20"])