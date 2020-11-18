//второе и третье задание
function writeNumbers(x, y) {
    if (x > y) {
        let temp;
        temp = x;
        x = y;
        y = temp;
    }
    for (let i = x; i <= y; i++) {
        console.log(i);
    }
}


function writeNumbersReverse(x, y) {
    if (x < y) {
        let temp;
        temp = x;
        x = y;
        y = temp;
    }
    let i = x;
    while (i !== y - 1) {
        console.log(i);
        i--;
    }
}