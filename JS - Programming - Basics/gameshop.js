function demo(input){
    let countGames = Number(input[0]);
    let Hearthstone = 0;
    let Fornite = 0;
    let Overwatch= 0;
    let Others= 0;

    for (let i = 1; i < input.length; i++){
        let name = input[i]
        if (name === "Hearthstone"){
            Hearthstone++
        } else if (name === "Fornite"){
            Fornite++
        } else if (name === "Overwatch"){
            Overwatch++
        } else {
            Others++
        }
    }
    console.log(`Hearthstone - ${((Hearthstone / countGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((Fornite / countGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((Overwatch / countGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((Others / countGames) * 100).toFixed(2)}%`);


}demo(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])