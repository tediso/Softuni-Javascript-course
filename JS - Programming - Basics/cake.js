function demo(input){
    let duljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let index = 2;
    let command = input[index];
    let countPieces = 0;
    let cake = duljina * shirochina;

    while(command !== "STOP"){
        let numCake = Number(command);
        cake-=numCake;
        if (cake < 0){
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            break;
        } 
        index++
        command = input[index]
    }
    if (cake > 0){
        console.log(`${Math.abs(cake)} pieces are left.`);
    }
    


}demo(["10",
"2",
"2",
"4",
"6",
"STOP"])