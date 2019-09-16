// interface NameInfo {
//   firstName: string,
//   lastName: string
// }

// const getFullName = ({ firstName, lastName }: NameInfo): string => {
//   return `${firstName} ${lastName}`
// }

// getFullName({
//   firstName: 'sun',
//   lastName: 'xiuming'
// })

// interface Vegetable {
//   color?: string,
//   readonly type: string,
//   [prop:string]: any
// }

// const getVegetable =  ({ color, type }: Vegetable) => {
//   return `A ${color ? color : ''} ${type}`
// }

// console.log(getVegetable({
//   color: 'red',
//   type: 'tomato',
//   size: 2
// } as Vegetable));

// const vegetableObj = {
//   color: 'red',
//   type: 'tomato',
//   size: 2
// }

// console.log(getVegetable(vegetableObj));

// console.log(getVegetable({
//   color: 'red',
//   type: 'tomato',
//   size: 2
// }));

// const vegetableObj2:Vegetable  = {
//   color: 'red',
//   type: 'tomato'
// };

// vegetableObj2.type = 'carrot'

// interface ArrayInter {
//   0: number,
//   1: string
// }

// const arr: ArrayInter = [1, 'a']


// interface AddFunc {
//   (num1: number, num2: number): number
// }

// const add: AddFunc = (n1, n2) => n1 + n2 

// interface RoleDic {
//   [id: number]: string
// }

// const role: RoleDic = {
//   'a': 'joe'
// }

// interface RoleDic {
//   [id: string]: string
// }

// const role: RoleDic = {
//   'a': 'super_admin',
//   1: 'admin'
// }

// interface Vegetable {
//   color: string
// }

// interface Tomato extends Vegetable {
//   radius: number
// }

// interface Carrot {
//   length: number
// }

// const tomato: Tomato = {
//   color: 'red',
//   radius: 40
// }

// const carrot: Carrot = {
//   length: 30
// }


// interface Counter {
//   ():void,
//   count: number
// }

// const getCounter = (): Counter => {
//   const c = () => { c.count ++ }
//   c.count = 0
//   return c
// }

// const counter: Counter = getCounter()
// counter()
// console.log(counter.count);
// counter()
// console.log(counter.count);

