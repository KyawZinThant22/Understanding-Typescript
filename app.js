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
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(4, 6, function (result) { return console.log(result); });
