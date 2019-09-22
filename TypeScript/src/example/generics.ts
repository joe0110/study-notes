import { type } from "os";

// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }

// console.log(getArray<number>(2).map(item => item.toFixed()));


// const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
//   return new Array(times).fill([param1, param2])
// }

// getArray(1,'a',3).map(item => {
//   console.log(item[0].length);
//   console.log(item[1].toFixed());
// })

// let getArray: <T>(arg: T, times: number) => T[]

// getArray = (arg, times) => {
//   return new Array(times).fill(arg)
// }

// getArray('22222',2).map(item => {
//   item[0].toFixed()
// });

// type GetArray = <T>(arg: any, times: number) => T[]

// const getArray: GetArray = (arg, times) => {
//   return new Array(times).fill(arg)
// }

// console.log(getArray('sssss',3));

// interface GetArray{
//   <T> (arg: T, times: number): T[]
// }

// const getArray: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }

// getArray(3, 2).map(item => {
//   item.length
// })

// interface ValueWithLength {
//   length: number
// }

// const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
//   return new Array(times).fill(arg)
// }

// console.log(getArray([1,2], 3));
// console.log(getArray(3, 3));
// console.log(getArray('abc', 3));
// console.log(getArray({
//   length: 3
// }, 3));

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}

const objs = {
  a: 'a',
  b: 'b'
}

getProps(objs, 'b')
