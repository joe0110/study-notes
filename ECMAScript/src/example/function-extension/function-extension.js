// function log(x,y = 'world') {
//   console.log(x,y)
// }
// console.log('Hello')
// console.log('Hello','china')
// console.log('Hello','  ')

// function Point(x = 0, y = 0) {
//   this.x = x
//   this.y = y
// }
// const p = new Point()
// console.log(p)

// let x = 99
// function foo(p = x + 1) {
//   console.log(p)
// }

// foo() // 100

// x = 100
// foo() // 101

// function foo({x,y = 5}) {
//   console.log(x,y)
// }

// foo({})
// foo({x:1})
// foo({x:1,y:2})
// foo()

// function foo ({ x, y = 5 } = {}) {
//   console.log(x, y)
// }

// foo()

// function fetch (url, { body = '', method = 'GET', headers = {} }) {
//   console.log(method)
// }

// fetch('htpp://example', {})
// fetch('htpp://example')

// function fetch (url, { body = '', method = 'GET', headers = {} } = {}) {
//   console.log(method)
// }

// fetch('htpp://example')

// function m1 ({ x = 0, y = 0 } = {}) {
//   return [x, y]
// }

// function m2 ({ x, y } = { x: 0, y: 0 }) {
//   return [x, y]
// }

// console.log(m1({}))
// console.log(m2({}))
// console.log(m1({ z: 3 }))
// console.log(m2({ z: 3 }))

// function f1 (x = 1, y) {
//   return [x, y]
// }

// console.log(f1())
// console.log(f1(2))
// console.log(f1(,1))
// console.log(f1(undefined, 1))

// function fn2 (x, y = 2, z) {
//   return [x, y, z]
// }

// console.log(fn2())
// console.log(fn2(1))
// console.log(fn2(1, ,2))
// console.log(fn2(1, undefined, 2))

// function foo (x = 5, y = 6) {
//   return [x, y]
// }

// console.log(foo(undefined, null))

// console.log(function (a) {}.length)
// console.log(function (a = 5) {}.length)
// console.log(function (a, b, c = 5) {}.length)
// console.log(function (...arg) {}.length)
// console.log(function (a = 0, b, c) {}.length)
// console.log(function (a, b = 1, c) {}.length)

// var x = 1
// function fn1 (x, y = x) {
//   console.log(y)
// }

// fn1(2)

// const x = 1

// function fn2 (y = x) {
//   const x = 2
//   console.log(y)
// }

// fn2()

// function fn3 (y = x) {
//   const x = 2
//   console.log(y)
// }

// fn3()

// var x = 1

// function fn4 (x = x) {
//   console.log(x)
// }

// fn4()

// const foo = 'outer'

// function bar (func = () => foo) {
//   const foo = 'inner'
//   console.log(func())
// }

// bar() // outer

// function bar (func = () => foo) {
//   const foo = 'inner'
//   console.log(func())
// }

// bar() // ReferenceError: foo is not defined

// var x = 1
// function foo (x, y = function () { x = 2 }) {
//   var x = 3
//   y()
//   console.log(x)
// }

// foo() // 3
// console.log(x) // 1

// var x = 1
// function foo (x, y = function () { x = 2 }) {
//   x = 3
//   y()
//   console.log(x)
// }

// foo() // 3
// console.log(x) // 3

// function throwIfMissing () {
//   throw new Error('Missing parameter')
// }

// function foo (mustBeProvided = throwIfMissing()) {
//   return mustBeProvided
// }

// console.log(foo())

// function add (...values) {
//   let sum = 0

//   for (const val of values) {
//     sum += val
//   }
//   return sum
// }

// console.log(add(1, 2, 3))

// function sortNumber () {
//   return Array.prototype.slice.call(arguments).sort((a, b) => a - b)
// }

// console.log(sortNumber(4, 5, 1, 9, 10))

// const sortNumbers = (...numbers) => numbers.sort((a, b) => b - a)
// console.log(sortNumbers(4, 5, 1, 9, 10))

// function push (array, ...items) {
//   items.forEach(item => {
//     array.push(item)
//     console.log(item)
//   })
// }

// const a = []
// push(a, 1, 2, 3)

// function fn1 (a, ...vals,c) {
//   console.log(a)
//   console.log(vals)
// }

// fn1(1, 2, 3, 4)

// console.log(function (a) {}.length)
// console.log(function (...a) {}.length)
// console.log(function (b, ...a) {}.length)

// function foo () {}
// console.log(foo.name)

// const fn1 = function () {}
// console.log(fn1.name)

// const bar = function baz () {}
// console.log(bar.name)

// console.log((new Function()).name)

// function foo () {}
// console.log(foo.bind({}).name)

// console.log(function () {}.bind({}).name)

// const sum = (num1, num2) => num1 + num2

// console.log(sum(1, 2))

// const getTemplateId = (id, name) => { id, name }

// console.log(getTemplateId(1, 'joe'))

// const getTemplateId = (id, name) => ({ id, name })

// console.log(getTemplateId(1, 'joe'))

// const full = ({ first = 'first', last = 'last' } = {}) => `first => ${first} last => ${last}`
// console.log(full({ first: 'joe', last: 24 }))

// const result1 = [1, 2, 3].map(function (x) {
//   return x * x
// })

// console.log(result1)

// const result2 = [1, 2, 3].map(x => x * x)

// console.log(result2)

// const result3 = [1, 5, 3].sort(function (a, b) {
//   return a - b
// })

// console.log(result3)

// const result4 = [1, 6, 4].sort((a, b) => a - b)
// console.log(result4)

// const numbers = (...nums) => nums
// console.log(numbers(1, 2, 3, 4, 5))

// const headAndTail = (head, ...tail) => [head, tail]
// console.log(headAndTail(1, 2, 3, 4, 5))

function foo () {
  setTimeout(() => {
    console.log(this.id)
  }, 100)
}

// var id = 21
foo.call({ id: 42 })
