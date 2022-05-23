function demo(input) {
    let month = input[0];
    let hours = Number(input[1]);
    let countPeople = Number(input[2]);
    let days = input[3];
    res = 0;

    if (month === "march" || month === "april" || month === "may") {
        if(days === "day"){
            res = 10.5
        }else{
            res = 8.4
        }
    } else if (month === "june" || month === "july" || month === "august") {
        if(days === "day"){
            res = 12.6
        }else{
            res = 10.2
        }
    }

    if(countPeople >= 4   ){
        res*=0.9
    }
     if(hours >= 5){
        res*=0.5
    }

    console.log("Price per person for one hour: " + res.toFixed(2))
    console.log("Total cost of the visit: " + (res*hours*countPeople).toFixed(2))

}
demo(["march",
    "3",
    "3",
    "day"])