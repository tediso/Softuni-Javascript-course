function demo(input) {
    let numBalls = Number(input[0]);
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let blackBalls = 0
    let index = 1;

    for (let i = index; i < input.length; i++) {
        let name = input[i]

        if (name === "red") {
            totalPoints += 5
            redBalls++
        } else if (name === "orange") {
            totalPoints += 10
            orangeBalls++
        } else if (name === "yellow") {
            totalPoints += 15
            yellowBalls++
        } else if (name === "white") {
            totalPoints += 20
            whiteBalls++
        } else if (name === "black") {
            blackBalls++
            totalPoints = Math.floor(totalPoints / 2)
        } else {
            otherBalls++
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);




} demo(["3",
    "white",
    "black",
    "pink"])