function demo(input) {
    let budget = Number(input[0])
    let index = 1
    let command = input[index].indexOf();
    let res = 0;
    let inputL = input.length

    while (command < inputL ) {
        if (command !== "closed") {
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

            index++
            command = input[index]

        }
    }
    if (budget >= res) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${budget - res}lv. more.`);
    }
    console.log(`Earned money: ${res}lv.`);


} demo(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])