function demo(input){
    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number(input[0]);

    while (command !== "Stop"){
    let num = Number(command);

    if (minNum > num){
    minNum = num
    }
    command = input[index];
    index++
}
console.log(minNum);


}demo(["100",

"99",

"80",

"70",

"Stop"])