function ceremony(input){
    let rentHall = Number(input[0]);

    let priceStatuets = rentHall * 0.70;
    let catering = priceStatuets * 0.85;
    let dj = catering / 2;

    let res = rentHall + priceStatuets + catering + dj;
    console.log(res.toFixed(2));

} ceremony(["3500"])