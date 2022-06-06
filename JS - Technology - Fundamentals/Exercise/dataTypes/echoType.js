function solve(Parameter){
let type = typeof (Parameter)

    if (type === 'string'){
        console.log('string');
        console.log(`${Parameter}`);
    } else if (type === 'number'){
        console.log('number');
        console.log(`${Parameter}`);
    } else {
        console.log('object');
        console.log('Parameter is not suitable for printing');
    }
}
solve('Hello, JavaScript!')