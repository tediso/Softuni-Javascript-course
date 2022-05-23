function demo(input){
    let max1 = Number(input[0])
    let max2 = Number(input[1])
    let max3 = Number(input[2])

    let prostiChislaDo9 = [1,2,3,5,7]
    for (let firstNumber = 2; firstNumber <= max1; firstNumber+=2) {
        for (let index = 0; index < prostiChislaDo9.length && prostiChislaDo9[index] < max2 ; index++) {
            for (let thirdNumber = 2; thirdNumber <= max3; thirdNumber+=2) {
                console.log(`${firstNumber}${prostiChislaDo9[index]}${thirdNumber}`)

            }
        }
        
    }
}

