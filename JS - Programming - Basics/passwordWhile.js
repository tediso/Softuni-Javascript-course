function demo(input){
    let index = 0;
    let name = input[index];
    index++
    let password = input[index];
    index++
    let tempPassword = input[index];
    index++

    while (tempPassword !== password){
        tempPassword = input[index];
        index++
    }
    console.log(`Welcome ${name}!`);
    
}demo(["Nakov",
"1234",
"Pass",
"1324",
"1234"])