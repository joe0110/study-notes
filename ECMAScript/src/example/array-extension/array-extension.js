// console.log(...[1,2,3]);
// console.log(1,...[2,3,4],5);

// function push(array,...items) {
//   array.push(...items)
//   console.log(array);
// }

// push([1,2,3],4,4,5)

// function add(x,y) {
//   return x + y
// }

// const numbers = [4,38]
// add(...numbers)

function f(v,w,x,y,z) {
  console.log(v,w,x,y,z); //-1 0 1 2 3
}
const args = [0,1]
f(-1,...args, 2, ...[3])






