function sum(arr, f) {
    if(typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}
sum([1, 2, 3]);
sum([1, 2, 3], x => x*x);
sum([1, 2, 3], x => Math.pow(x, 3));