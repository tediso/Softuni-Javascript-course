function numbers(num1,precision){
    if(precision > 15){
        precision=15;
    }
    let final = num1.toFixed(precision);
    console.log(parseFloat(final));


}
numbers(3.1415926535897932384626433832795,2)