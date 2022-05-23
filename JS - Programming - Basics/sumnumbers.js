function sumNumbers(input){
    let num = "" + input[0];
    let res = 0;

    for ( let i = 0; i < num.length; i++){
        let n = Number(num.charAt(i))
        res += n
        }
        console.log(`The sum of the digits is:${res}`);
    }

sumNumbers(["1234"])