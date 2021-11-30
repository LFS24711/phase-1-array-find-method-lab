function superbowlWin (array1) {
    const found = array1.find( ({result}) => result === 'W');
    if (found) {
        return found.year;
    }
}