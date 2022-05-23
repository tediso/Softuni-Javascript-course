function demo(input) {
    let num = Number(input[0]);
    let counter = 1;
    let isBigger = false;
    let buff = "";

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (counter > num) {
                isBigger = true;
                break;
            }

            buff += counter + " ";
            counter++;

        }

        console.log(buff);
        buff = "";
        if (isBigger) {
            break;
        }
    }
}
demo(["7"])