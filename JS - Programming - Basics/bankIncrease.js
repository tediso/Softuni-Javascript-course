function calc(input){
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let increase = Number(input[2]);
    
    let interestForoneYear = deposit * (increase/100);
    let interestForoneMonth = interestForoneYear / 12;
    let res = deposit + term * interestForoneMonth;
    console.log(res);
    
    }
    calc(["200",
     "3",
      "5.7"])