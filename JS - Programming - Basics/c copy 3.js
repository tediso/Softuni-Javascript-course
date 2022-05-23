function demo(input) {
    for(let i = 1; i < input.length; i++){
        let totalGold = 0;
        let sredenDobiv = Number(input[i++]);
        let dni = Number(input[i++])

        for(let j = 0; j < dni; j++,i++){
            totalGold += Number(input[i]);
        }  

        i--;
        if(sredenDobiv * dni <= totalGold){
            console.log("Good job! Average gold per day: " + (totalGold/dni).toFixed(2)+".")
        }else{
            console.log("You need " +( sredenDobiv-(totalGold/dni)).toFixed(2)+" gold.")
        }
    }
}
demo(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])