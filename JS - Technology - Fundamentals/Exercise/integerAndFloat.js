function solve(numA,numB,numC){
  let res = numA + numB + numC
  
  console.log(`${res} - ${parseInt(res) === res ? 'Integer' : 'Float'}`);

}
solve(9, 100, 1.1)