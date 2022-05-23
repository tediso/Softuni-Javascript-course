function lunchBreak (input){
    let nameMovie = input[0];
    let durationEpisode = Number(input[1]);
    let durationRest = Number(input[2]);

    let timeLunch = durationRest * 1/8;
    let timeRest = durationRest * 1/4;
    let leftTime = durationRest - timeLunch - timeRest;

    if(leftTime >= durationEpisode){
        console.log(`You have enough time to watch ${nameMovie} and left with ${Math.ceil(leftTime - durationEpisode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameMovie}, you need ${Math.ceil(durationEpisode - leftTime)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",
"60",
"96"])