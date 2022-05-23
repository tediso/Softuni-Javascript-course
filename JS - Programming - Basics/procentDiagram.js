function procent(input){
    let index = 0;
    let numCount = Number(input[index]);
    index++;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < numCount; i++){
        let x = Number(input[index]);
        index++;

        if (x < 200){
            p1++
        } else if (x >= 200 && x <= 399){
            p2++
        } else if (x >= 400 && x <= 599){
            p3++
        } else if (x >= 600 &&x <= 799){
            p4++
        } else if (x >= 800){
            p5++
        }
        
    }
    let p1Res = p1 / numCount * 100;
        let p2Res = p2 / numCount * 100;
        let p3Res = p3 / numCount * 100;
        let p4Res = p4 / numCount * 100;
        let p5Res = p5 / numCount * 100;

        console.log(p1Res.toFixed(2) + "%");
        console.log(p2Res.toFixed(2) + "%");
        console.log(p3Res.toFixed(2) + "%");
        console.log(p4Res.toFixed(2) + "%");
        console.log(p5Res.toFixed(2) + "%");
    


}procent(["3","1","2","999"])