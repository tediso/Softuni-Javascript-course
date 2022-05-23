function demo(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let arr = []

    for(;m>=n;m--){
        if(m% 2 === 0 && m % 3===0){
            if(m === s){
                break
            }else{
                arr.push(m);
            }
        }
    }

    console.log(arr.join(" "))
}
demo(["march",
    "3",
    "3",
    "day"])