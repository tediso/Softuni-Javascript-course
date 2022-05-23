function aquariumLiter(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let Aquarium = length * width * height;
    let literAquarium = Aquarium / 1000;
    let occupiedSpace = procent / 100;

    let needLiter = literAquarium * (1 - occupiedSpace);

    console.log(needLiter);
    

}
aquariumLiter(["85", "75", "47", "17"])