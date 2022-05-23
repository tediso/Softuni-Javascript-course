function triangleArea(input){
    let side = Number(input[0]);
    let height = Number(input[1]);
    let result = (side * height) / 2;
    console.log(result.toFixed(2));


}
triangleArea(["20", "30"])