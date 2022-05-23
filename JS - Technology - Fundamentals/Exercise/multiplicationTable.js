function solve(num){
    let index = 1
    for(let first = 1;first <= 10;first++){
        console.log(`${num} X ${index} = ${num * index}`)
        index++
    }

}
solve(5)