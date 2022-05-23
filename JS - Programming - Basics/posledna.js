function demo(input){
let num = Number(input[0]);
let lastNum = num % 10

    for (let a = 1; a <= 9; a++){
        for (let b = 9; b >= a; b--){
            for (let c = 0; c <= 9; c++){
                for(let d = 9; d >= c; d--){
                    let res1 = a + b + c + d
                    let res2 = a * b * c * d
                    let res3 = res2 / res1
                    if (res1 === res2){
                        if (lastNum === 5){
                            console.log(a.toString() + b.toString() + c.toString() + d.toString());
                        }
                    } else if (res3 === 3 ){
                        if (num % 3 === 0){
                            console.log(d.toString() + c.toString() + b.toString() + a.toString());
                        } else{
                            console.log("Nothing found");
                        }
                    }
                }
            }
        }
    }
  


}demo(["123"])