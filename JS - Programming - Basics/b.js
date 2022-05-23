function demo(input){
    let countProcessorNeed = Number(input[0]);
    let countPeople = Number(input[1]);
    let workDay = Number(input[2]);
    let res = 0;

    let totalTime = countPeople * workDay * 8;
    let workProcessor = Math.floor(totalTime / 3);
    
    if (workProcessor < countProcessorNeed){
    res = res + (countProcessorNeed - workProcessor);
    res*=110.10;
    console.log(`Losses: -> ${res.toFixed(2)} BGN`);
    } else {
        res = res + (workProcessor - countProcessorNeed);
        res*=110.10;
        console.log(`Profit: -> ${res.toFixed(2)} BGN`);
    }
    


}
demo([150,
    7,
    18])