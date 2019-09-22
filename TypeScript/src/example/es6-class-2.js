// function Food() {
//   this.type = 'food'
// }

// Food.prototype.getType = function () {
//   return this.type
// }

// function Vegetables(name) {
//   this.name = name
// }

// Vegetables.prototype = new Food()

// const v1 = new Vegetables('tomato')

// console.log(v1.type);

// class Parent {
//   constructor (name) {
//     this.name = name
//   }
//   getName () {
//     return this.name
//   }
// }

// class Child extends Parent {
//   constructor (name, age) {
//     super(name)
//     this.age = age
//   }
// }

// const c = new Child('joe', 18)
// console.log(c.getName());
// console.log(c instanceof Child);
// console.log(c instanceof Parent);
// console.log(Object.getPrototypeOf(c) === Parent.prototype);
// console.log(Object.getPrototypeOf(c) === Parent.prototype);
// console.log(Parent.prototype.isPrototypeOf(c));

// class Parent {
//   constructor () {
//     this.type = 'parent'
//   }
//   getName () {
//     return this.type
//   }
// }

// Parent.getType = () => {
//   return 'is parent'
// }

// class Child extends Parent {
//   constructor() {
//     super()
//     console.log('constructor: ', super.getName());
//   }

//   getParentName() {
//     console.log('getParentName:', super.getName());
//   }

//   static getParentType() {
//     console.log('getParentType:', super.getType());
//   }
// }

// const c1 = new Child();
// c1.getParentName()
// Child.getParentType()

// class Parent {
//   constructor() {
//     this.name = 'partent'
//   }

//   print() {
//     console.log(this.name);
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super()
//     this.name = 'child'
//   }
//   childPrint() {
//     super.print()
//   }
// }

// const c = new Child()



// console.log(Child.__proto__ === Parent);
// console.log(Child.prototype);
// console.log(c.__proto__);

// class Parent {

// }

// class Person extends Parent {
// }

// const c1 = new Person()
// const p1 = new Parent()

// console.log(c1.__proto__.__proto__);

