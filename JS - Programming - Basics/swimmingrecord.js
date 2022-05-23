function swimmingRecord(input){
    let recordSec = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let swimmingTimeoneMeter = Number(input[2]);

    let timeSwimming = distanceMetres * swimmingTimeoneMeter;
    let resistance = Math.floor(distanceMetres / 15) * 12.5;
    let totalTime = timeSwimming + resistance;

    if (recordSec > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`)
    }


}
swimmingRecord(["10464",
"1500",
"20"])