function oscars(input) {
    let nameMovie = input[0];
    let hallName = input[1];
    let countBillet = Number(input[2]);
    let res = 0;

    if (hallName === "normal") {
        if (nameMovie === "A Star Is Born") {
            res = countBillet * 7.50;
        } else if (nameMovie === "Bohemian Rhapsody") {
            res = countBillet * 7.35;
        } else if (nameMovie === "Green Book") {
            res = countBillet * 8.15;
        } else if (nameMovie === "The Favourite") {
            res = countBillet * 8.75;
        }
    }
    if (hallName === "luxury") {
        if (nameMovie === "A Star Is Born") {
            res = countBillet * 10.50;
        } else if (nameMovie === "Bohemian Rhapsody") {
            res = countBillet * 9.45;
        } else if (nameMovie === "Green Book") {
            res = countBillet * 10.25;
        } else if (nameMovie === "The Favourite") {
            res = countBillet * 11.55;
        }
    }
    if (hallName === "ultra luxury") {
        if (nameMovie === "A Star Is Born") {
            res = countBillet * 13.50;
        } else if (nameMovie === "Bohemian Rhapsody") {
            res = countBillet * 12.75;
        } else if (nameMovie === "Green Book") {
            res = countBillet * 13.25;
        } else if (nameMovie === "The Favourite") {
            res = countBillet * 13.95;
        }
    }
    console.log(`${nameMovie} -> ${(res).toFixed(2)} lv.`);


} oscars(["A Star Is Born",
    "luxury",
    "42"])