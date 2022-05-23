function vacantion(groupCount, typeGroup, dayWeek) {
    let total = 0
    if (typeGroup === 'Students') {
        if (dayWeek === 'Friday') {
            total = groupCount * 8.45;
        } else if (dayWeek === 'Saturday') {
            total = groupCount * 9.80;
        } else if (dayWeek === 'Sunday') {
            total = groupCount * 10.46
        }
        if (groupCount >= 30) {
            total *= 0.85
        }
    } else if (typeGroup === 'Business') {
        if (dayWeek === 'Friday') {
            if (groupCount > 100) {
                groupCount -= 10
            }
            total = groupCount * 10.90;
        } else if (dayWeek === 'Saturday') {
            if (groupCount > 100) {
                groupCount -= 10
            }
            total = groupCount * 15.60;
        } else if (dayWeek === 'Sunday') {
            if (groupCount > 100) {
                groupCount -= 10
            }
            total = groupCount * 16
        }

    } else if (typeGroup === 'Regular') {
        if (dayWeek === 'Friday') {
            total = groupCount * 15;
        } else if (dayWeek === 'Saturday') {
            total = groupCount * 20;
        } else if (dayWeek === 'Sunday') {
            total = groupCount * 22.50
        }
        if(groupCount >= 10 && groupCount <= 20){
            total*=0.95
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);



}
vacantion(30,
    "Students",
    "Sunday")