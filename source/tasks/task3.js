function convertFloor(floor) {
    switch (floor) {   //свитч кейс
        case floor < 0:
            return floor;
        case floor === 12:
            return floor + 2;
        default:
            return floor + 1;
    }

    if (floor < 0) { //с ифами
        return floor;
    }
    if (floor === 12) {
        return floor + 2;
    }
    return floor + 1;
}