function numbers(input){
    let a = Number(input[0]);

    if( a >= -100 && a <= 100 && a !== 0){
        console.log("Yes");
    } else {
        console.log("No");
    }


}
numbers(["-25"]);