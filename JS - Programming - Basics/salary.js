function salary(input) {
    let countTab = Number(input[0]);
    let budget = Number(input[1]);
    let inputL = input.length;

    for (let index = 2; index < inputL; index++) {
        let currentTab = input[index];
        switch (currentTab) {
            case "Facebook": 
            budget -= 150; 
            break;
            case "Instagram": 
            budget -= 100; 
            break;
            case "Reddit": 
            budget -= 50; 
            break;
        }
        if (budget <= 0){
            console.log("You have lost your salary.");break;
        } 
        }
        if (budget > 0){
            console.log(`${budget}`);
        }
        
        
}salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])