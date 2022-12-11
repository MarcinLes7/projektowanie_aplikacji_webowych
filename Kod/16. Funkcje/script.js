function simpleFunction() {
    console.log('Wywołano simpleFunction');
}
simpleFunction();

console.log('-------------------');
function rewriteIt(text) {
    console.log(text);
}
rewriteIt('Jakiś tekst');


console.log('------------------');
function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + ' + ' + b + ' = ' + sum);
/* 2 + 2 = 4 */
}
sumOfTwo(2, 3);


console.log('---------------------');
function functionWithReturn() {
    return 'Zwracany tekst';
}
console.log(functionWithReturn());






