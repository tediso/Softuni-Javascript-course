function demo(input){
    let procentMaznini = Number(input[0]);
    let procentProteini = Number(input[1]);
    let procentVaglehidrati = Number(input[2]);
    let totalKalorii = Number(input[3]);
    let procentVoda = Number(input[4]);

    let gramMaznini = (totalKalorii * (procentMaznini / 100)) / 9;
    let gramProtein = (totalKalorii * (procentProteini / 100)) / 4;
    let gramVaglehidrati = (totalKalorii * (procentVaglehidrati / 100)) / 4;

    let totalFood = gramMaznini + gramProtein + gramVaglehidrati;
    let kaloriiGram = totalKalorii / totalFood;
    let res = (kaloriiGram * (100 / 100)) - (kaloriiGram * (procentVoda/100));
    console.log(`${res.toFixed(4)}`);
   


}demo(["60",
"25",
"15",
"2500",
"60"])