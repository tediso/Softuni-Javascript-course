function demo(input){
    
    let countRide = Number(input[0]);
    let microbus = 0;
    let camion = 0;
    let vlak = 0; 
    let total = 0;
    let countMicrobus = 0;
    let countCamion = 0;
    let countVlak = 0;
    

    for ( let weight = 1; weight <= countRide; weight++){
        let index = Number(input[weight]);
        total+=index
        
        
        if(index <= 3){
        microbus+=200 * index;
        countMicrobus+=index;
        } else if (index > 3 && index <= 11){
            camion+=175 * index;
            countCamion+=index;
        } else if (index > 11){
            vlak+=120 * index;
            countVlak+=index;
        }
    }
    console.log(((microbus + camion + vlak) / total).toFixed(2));
    console.log(`${(countMicrobus / total * 100).toFixed(2)}%`);
    console.log(`${(countCamion / total * 100).toFixed(2)}%`);
    console.log(`${(countVlak / total * 100).toFixed(2)}%`);

}demo(["4",
    "1",
    "5",
    "16",
    "3"
    ])