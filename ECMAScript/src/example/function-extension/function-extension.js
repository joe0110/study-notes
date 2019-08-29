// function log(x,y = 'world') {
//   console.log(x,y);
// }
// console.log('Hello')
// console.log('Hello','china')
// console.log('Hello','  ')

// function Point(x = 0, y = 0) {
//   this.x = x
//   this.y = y
// }
// const p = new Point()
// console.log(p);


let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101

