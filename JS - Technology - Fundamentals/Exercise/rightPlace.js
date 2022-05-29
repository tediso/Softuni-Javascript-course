function solve(first,char,second){
    let correct =""
    for(let i = 0; i < first.length;i++){
        let command = first[i]
        if(command === '_'){
            correct+=char
        } else {
            correct+=command
        }
        command++
    }
    if(correct === second){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}
solve('Str_ng', 'i', 'String')