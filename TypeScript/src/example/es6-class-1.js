// const info = {
//   _age: 18,
//   set age (newVal) {
//     newVal> 18? console.log('怎么变老了') : console.log('哈哈我还年轻')
//   },
//   get age () {
//     console.log('你问我年龄干嘛');
//     return this._age
//   }
// }

// console.log(info._age);
// info.age = 17
// info.age = 19
// console.log(info.age);

// class Info {
//   constructor(age) {
//     this._age = age
//   }

//   set age(newAge) {
//     console.log(`new age is: ${newAge}`);
//     this._age = newAge
//   }

//   get age(){
//     return this._age
//   }
// }

// const info = new Info(20)
// console.log(info._age);
// info.age = 17
// console.log(info.age);

// const info = class{
//   constructor () {
//     console.log('init');
//   }
// }

// const info1 = new info()

// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }

//   getPosition() {
//     return `(${this.x}${this.y})`
//   }

//   static getClassName() {
//     return Point.name
//   }
// }

// const p = new Point(1,2)
// console.log(p.getPosition());
// console.log(Point.getClassName());

// class Point {
//   constructor () {
//     this.x = 0
//   }
// }

// Point.y = 2

// const p = new Point()
// console.log(p.x);
// console.log(p.y);
// console.log(Point.y);

// const _func2 = () => {
//   console.log('=====this',this);
// }

// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }
//   func1() {
//     _func2.bind()()
//   }
// }

// const p1 = new Point(1,2)
// p1.func1()

// const _func2 = function() {
//   console.log('=====this222',this);
// }

// class Point {
//   constructor () {
//     this.func1()
//   }
//   func1() {
//     console.log('=====this111',this);
//     _func2.call(this)
//   }
// }

// const p1 = new Point()


// import a from  './a'

// const fn1 = new a()
// console.log(fn1);
