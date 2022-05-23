function demo(input) {
    let adults = 0;
    let kids= 0;

    for(let i = 0; i< input.length; i++){
        let rec = input[i];

        if(rec === "Christmas"){
            break;
        }

        rec = Number(rec)
        if (rec === NaN){
            break;
        }
        if( rec> 16){
            adults++;
        }else{
            kids++;
        }
    }

    console.log("Number of adults: "+ adults)
    
    console.log("Number of kids: "+ kids)

    
    console.log("Money for toys: "+ kids * 5)

    console.log("Money for sweaters: "+ adults * 15)
}
demo(["march",
    "3",
    "3",
    "day"])