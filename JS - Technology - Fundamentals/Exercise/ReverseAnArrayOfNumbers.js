function solve(num , objects){
    let res = ''
for (let i = num - 1 ; i >= 0;i--){
    let command = objects[i]
res = res + ' ' + command + ' '
}
console.log(res);
}
solve(3, [10, 20, 30, 40, 50])