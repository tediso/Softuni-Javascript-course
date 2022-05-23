function demo (input){
    let countTripSea = Number(input[0]);
    let countTripForest = Number(input[1]);
    let index = 2;
    let res = 0;


    for(let i = index; i < input.length; i++){
        let type = input[i];
        if (type === "Stop"){
            break;
        }
        if (type === "sea" && countTripSea > 0){
            countTripSea-=1
            res+=680;
        } else if (type === "mountain" && countTripForest > 0){
            countTripForest-=1
            res+=499;
        }
        if (countTripSea === 0 && countTripForest === 0){
            break;
        }
       

    }
    if (countTripForest === 0 && countTripSea === 0){
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${res} leva.`);

}demo(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])