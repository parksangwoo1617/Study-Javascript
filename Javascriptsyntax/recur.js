function findNeedle(haystack) {
    if(haystack.length === 0) return 'no haystack here!';
    if(haystack.shift() === 'needle') return 'found it!';
    return findNeedle(haystack);
}

function fact(n) {
    if(n === 1) return 1;
    return n * fact(n - 1);
}

console.log(fact(4));