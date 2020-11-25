function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);