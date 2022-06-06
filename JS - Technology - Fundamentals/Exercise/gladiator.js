function solve(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmentCount = 0
    let swordCount = 0
    let shieldCount = 0
    let armorCount = 0
    for(let i = 1;i <= lostFightsCount;i++){
    if(i % 2===0){
        helmentCount++
    } 
    if (i % 3 === 0){
        swordCount++
    } 
    if(i % 6 === 0){
        shieldCount++
    }
    if(i % 12 === 0){
        armorCount++
    }
    }
    let res = (helmetPrice * helmentCount) + (swordCount * swordPrice) + (shieldCount * shieldPrice) + (armorCount * armorPrice)
    console.log(`Gladiator expenses: ${res.toFixed(2)} aureus`);
}
solve(7,
    2,
    3,
    4,
    5)