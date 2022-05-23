function projectCreation(input){
    let name = input[0];
    let numberProjects = input[1];
    let oneProjecttime = 3;
    let needHours = numberProjects * oneProjecttime;
    console.log(`The architect ${name} will need ${needHours} hours to complete ${numberProjects} project/s.`)


}
projectCreation(["George", "4"]);