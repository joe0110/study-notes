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

// function f(v,w,x,y,z) {
//   console.log(v,w,x,y,z); //-1 0 1 2 3
// }
// const args = [0,1]
// f(-1,...args, 2, ...[3])

// const x = 2
// const arr = [
//   ...(x>0? ['a'] : [])
// ]
// console.log(arr);


// function f(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// const args = [0,1,2]
// // f.apply(null,args)
// f(...args)

// console.log(Math.max.apply(null,[14,4,5]));
// console.log(Math.max(...[14,4,5]));

// const arr1 = [0,1,2]
// const arr2 = [3,4,5]

// // Array.prototype.push.apply(arr1,arr2)
// arr1.push(...arr2)
// console.log(arr1);

// console.log(new Date(2015,1,1));
// console.log(new Date(...[2015,1,1]));
// console.log(new (Date.bind.apply(Date,[null,2015,1,1])));

// const a1 = [1,2]
// const a2 = a1

// a2[0] = 3
// console.log(a1);


// const a1 = [1,2]
// const a2 = a1.concat()

// const a1 = [1,2]
// // const a2 = [...a1]
// const [...a2] = a1

// a2[1] = 3
// console.log(a1);
// console.log(a2);


// const arr1 = ['a','b']
// const arr2 = ['c']
// const arr3 = ['d','e']

// // console.log(arr1.concat(arr2,arr3));
// console.log([...arr1,...arr2,...arr3]);

// const a1 = [{ foo: 1 }]
// const a2 = [{ bar: 2 }]

// const a3 = a1.concat(a2)
// const a4 = [...a1, ...a2]
// a1[0]['foo'] = 44
// console.log(a3);
// console.log(a4);

// const arr = [1,2,3,4,5]
// const a = arr[0],rest = arr.slice(1)
// const [a,...rest] = arr
// console.log(a);
// console.log(rest);

// const [first,...rest] = [1,2,3,4,5]
// console.log(first);
// console.log(rest);

// const [first,...rest] = []
// console.log(first);
// console.log(rest);

// const [first,...rest] = ['foo']
// console.log(first);
// console.log(rest);

// const [...butLast, last] = [1,2,4,45,4]
// const [first,...middle, last] = [1,2,4,45,4]

// console.log([...'first']);

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }

// console.log([...5]) // [0, 1, 2, 3, 4]


// var arrayLike = {
//   '0':'a',
//   '1':'b',
//   '2':'c',
//   '3': 'd',
//   length:4
// };

// arrayLike = Array.prototype.slice.call(arrayLike)
// // arrayLike = Array.from(arrayLike)


// console.log(arrayLike);
