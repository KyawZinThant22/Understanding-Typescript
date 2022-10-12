function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number): void {
  console.log("Result", n);
}

printResult(add(2, 5));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(4, 6, (result) => console.log(result));
