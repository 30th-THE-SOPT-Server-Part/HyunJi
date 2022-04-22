// var: Function Scope
// if (true) {
//   var x = 'var';
// }
// console.log(`var: ${x}`);

// let, const: Block Scope
// if (true) {
//   let y = 'let';
// }
// console.log(`let: ${y}`);

function foo() {
  if (true) {
    var name = '박현지';
    console.log('if block - ', name);
  }
  console.log('function block - ', name);
}
console.log('global - ', name);

foo();
