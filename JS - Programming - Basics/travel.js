function demo(input){
    let index = 0;
    let command = input[index];
    index++
    while (command !== "End"){
        let destination = command
        let budget = Number(input[index])
        index++
        let spendMoney = 0;
        while(spendMoney < budget){
            let money = Number(input[index])
            index++
            spendMoney+=money
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++
    }


}demo(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])