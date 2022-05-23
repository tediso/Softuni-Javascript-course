function demo(input){
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let freeSpace = w * l * h;
    let index = 3;
    let command = input[index];

    while(command !== "Done"){
        let numbersBox = Number(command);
        freeSpace-=numbersBox;
        if(freeSpace < 0){
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++
        command = input[index]

    }
    if (freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }


}demo(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])