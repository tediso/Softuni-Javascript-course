function hospital(input){

    let period = Number(input[0]);
    let doctor = 7;
    let pregledani = 0;
    let nepregledani = 0;
    
    for ( let days = 1 ; days <= period; days++){
        let patient = Number(input[days])
        if (days % 3 === 0 && nepregledani > pregledani){
            doctor+=1
        }
        if (patient > doctor ){
        pregledani+=doctor
        nepregledani+= patient - doctor
        } else {
            pregledani+=patient
        }
    }
console.log(`Treated patients: ${pregledani}.`);
console.log(`Untreated patients: ${nepregledani}.`);


}hospital(["4",
    "7",
    "27",
    "9",
    "1"])