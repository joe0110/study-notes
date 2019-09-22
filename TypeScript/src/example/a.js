const func1 = Symbol('fun1')
export default class Point {
  static [func1] () {
    return 'this is func1'
  }
}