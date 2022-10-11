function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log("Result", n);
}
printResult(add(2, 5));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
