
    function solve(input) {
        let filmNums = Number(input[0]);
        let highestRating = Number.MIN_VALUE;
        let highName = ``;
        let lowestRating = Number.MAX_VALUE;
        let lowestName = ``;
        let averageRating = 0;
        for (i = 1; i < input.length; i++) {
            let name = input[i];
            let rating = Number(input[i + 1]);
            
        
            if (rating > highestRating) {
                highestRating = rating;
                highName = name;
            }
            if (rating < lowestRating) {
                lowestRating = rating;
                lowestName = name;
            }

        }
        let res = (averageRating / filmNums) 
        console.log(`${highName} is with highest rating: ${highestRating.toFixed(1)}`);
        console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
        console.log(`Average rating: ${(res).toFixed(1)}`);
    }

solve(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])