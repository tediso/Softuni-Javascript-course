function gender(arg1) {

    let age = Number(arg1[0]);
    let gender = arg1[1]

    if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else if (gender === "m") {
        if (age < 16) {
            console.log("Master");

        } else {
            console.log("Mr.");
        }
    }
}

gender(["13.5",
    "m"])