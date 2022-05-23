function demo(input){
    let procentMaznini = Number(input[0]);
    let procentProtein = Number(input[1]);
    let procentVuglehidrati = Number(input[2]);
    let totalCalorii = Number(input[3]);
    let procentVoda = Number(input[4]);

    let totalMaznini = (totalCalorii * (procentMaznini/100)) / 9;
    let totalProtein = (totalCalorii * (procentProtein/100)) / 4;
    let totalVuglehidrati = (totalCalorii * (procentVuglehidrati/100)) / 4;
    
    let totalFood = totalMaznini + totalProtein + totalVuglehidrati;
    let caloriesForGram = totalCalorii / totalFood;
    let res = caloriesForGram * (100/100) - (caloriesForGram * (procentVoda/100))
    console.log(res.toFixed(4));


}demo(["60",
"25",
"15",
"2500",
"60"])