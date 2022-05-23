function demo (input){
    let budget = Number(input[0]);
    let index = 1
    let stop = false
    res = 0;

    for(let i = index; i < input.length; i++){
        let command = input[i];
        if (command !== "closed"){
            if (command === "mens") {
                res += 15
            } else if (command === "ladies") {
                res += 20
            } else if (command === "kids") {
                res += 10
            } else if (command === "touch up") {
                res += 20
            } else if (command === "full color") {
                res += 30
            }
            if (command === "haircut" || command === "color") {
                res += 0
            }
        } else {
            stop = true
            break;
        }
        if (stop){
        break;
        }
    }
    if (res >= budget) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${budget - res}lv. more.`);
    }
    console.log(`Earned money: ${res}lv.`);


}demo(["50",
"color",
"full color",
"haircut",
"ladies"])