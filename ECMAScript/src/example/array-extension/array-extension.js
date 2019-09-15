// console.log(...[1,2,3])
// console.log(1,...[2,3,4],5)

// function push(array,...items) {
//   array.push(...items)
//   console.log(array)
// }

// push([1,2,3],4,4,5)

// function add(x,y) {
//   return x + y
// }

// const numbers = [4,38]
// add(...numbers)

// function f(v,w,x,y,z) {
//   console.log(v,w,x,y,z) //-1 0 1 2 3
// }
// const args = [0,1]
// f(-1,...args, 2, ...[3])

// const x = 2
// const arr = [
//   ...(x>0? ['a'] : [])
// ]
// console.log(arr)

// function f(x, y, z) {
//   console.log(x)
//   console.log(y)
//   console.log(z)
// }

// const args = [0,1,2]
// // f.apply(null,args)
// f(...args)

// console.log(Math.max.apply(null,[14,4,5]))
// console.log(Math.max(...[14,4,5]))

// const arr1 = [0,1,2]
// const arr2 = [3,4,5]

// // Array.prototype.push.apply(arr1,arr2)
// arr1.push(...arr2)
// console.log(arr1)

// console.log(new Date(2015,1,1))
// console.log(new Date(...[2015,1,1]))
// console.log(new (Date.bind.apply(Date,[null,2015,1,1])))

// const a1 = [1,2]
// const a2 = a1

// a2[0] = 3
// console.log(a1)

// const a1 = [1,2]
// const a2 = a1.concat()

// const a1 = [1,2]
// // const a2 = [...a1]
// const [...a2] = a1

// a2[1] = 3
// console.log(a1)
// console.log(a2)

// const arr1 = ['a','b']
// const arr2 = ['c']
// const arr3 = ['d','e']

// // console.log(arr1.concat(arr2,arr3))
// console.log([...arr1,...arr2,...arr3])

// const a1 = [{ foo: 1 }]
// const a2 = [{ bar: 2 }]

// const a3 = a1.concat(a2)
// const a4 = [...a1, ...a2]
// a1[0]['foo'] = 44
// console.log(a3)
// console.log(a4)

// const arr = [1,2,3,4,5]
// const a = arr[0],rest = arr.slice(1)
// const [a,...rest] = arr
// console.log(a)
// console.log(rest)

// const [first,...rest] = [1,2,3,4,5]
// console.log(first)
// console.log(rest)

// const [first,...rest] = []
// console.log(first)
// console.log(rest)

// const [first,...rest] = ['foo']
// console.log(first)
// console.log(rest)

// const [...butLast, last] = [1,2,4,45,4]
// const [first,...middle, last] = [1,2,4,45,4]

// console.log([...'first'])

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0
//   let num = this.valueOf()
//   while (i < num) {
//     yield i++
//   }
// }

// console.log([...5]) // [0, 1, 2, 3, 4]

// var arrayLike = {
//   '0':'a',
//   '1':'b',
//   '2':'c',
//   '3': 'd',
//   length:4
// }

// arrayLike = Array.prototype.slice.call(arrayLike)
// // arrayLike = Array.from(arrayLike)

// console.log(arrayLike)

// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])

// const arr = [...map.keys()]

// console.log(arr)

// const go = function * () {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
// }

// console.log([...go()])

// const obj = {
//   a: 1,
//   b: 2
// }

// const arr = [...obj]

// console.log(arr)

// const arrayLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }

// // const arr1 = Array.prototype.slice.call(arrayLike)
// const arr1 = Array.from(arrayLike)
// console.log(arr1)

// const ps = document.querySelectorAll('p')
// console.log(Array.from(ps).filter(p => p.textContent.length > 1))

// function foo () {
//   const args = Array.from(arguments)
//   console.log(args)
// }

// foo(1, 2, 3, 4)

// const str = 'hello'
// console.dir([...str])

// const arrayLike = {
//   0: '0',
//   1: '1',
//   length: 2
// }
// const arr = Array.from(arrayLike, x => x + x)
// console.log(arr)

// const arr = Array.from([1, 2, 3], x => x * x)
// console.log(arr)

// console.log(Array.from([1,, 2,, 3], n => n || 0))

// function typesOf () {
//   return Array.from(arguments, value => typeof value)
// }

// console.log(typesOf(null, [], NaN))

// console.log([1, 2, 3, 4, 5].copyWithin(0, 2)) // 3 4 5 4 5
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)) // 4 2 3 4 5
// console.log([].copyWithin.call({ length: 5, 3: 1 }[3]))
// console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 3))

// console.log([1, 4, -5, 10].find(n => n < 0))

// [1, 5, 10, 15].find((value, index, arr) => {
//   console.log(value)
//   console.log(index)
//   console.log(arr)
// })

// console.log([1, -5, 10, 15].findIndex(n => n < 0))

// console.log([10, 12, 26, 15].find(function (v) {
//   return v > this.age
// }, { name: 'John', age: 20 }))

// console.log([NaN].indexOf(NaN))

// console.log([NaN].find(y => Object.is(NaN, y)))
