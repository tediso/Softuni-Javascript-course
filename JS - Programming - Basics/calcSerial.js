function demo(input){
    let nameMovie = input[0];
    let season = Number(input[1]);
    let episode = Number(input[2]);
    let timeMovie = Number(input[3]);

    let timeReklama = timeMovie * 0.2;
    let totalTimeMovie = timeMovie + timeReklama;
    let addTime = season * 10;
    let res = totalTimeMovie * season * episode + addTime;
    console.log(`Total time needed to watch the ${nameMovie} series is ${res} minutes.`);


}demo
(["Lucifer",
"3",
"18",
"55"])