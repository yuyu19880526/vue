// 原始数据类型 boolean undefined null string number object symbol
// Symbol 表示一种符号 独一无二 不是一个对象 
let s1 = Symbol()
let s2 = Symbol()

console.log(s1 == s2) // false

let obj = {
  name: 'imooc'
}
let s3 = Symbol(obj)  
console.log(s3)  // Symbol([object Object]) 自动转换成toString()

let obj1 = {
  name: 'imooc',
  toString() {
    return this.name
  }
}
let s4 = Symbol(obj1)
console.log(s4) // Symbol(imooc)

console.log(s4.description)

// 添加for相当于定义在全局环境中，当我声明了imooc 以后
// 当我再次声明imooc 的时候会在全局搜索imooc,如果找到了，下面的imooc 会指向上面的imooc
let s5 = Symbol.for('imooc')
let s6 = Symbol.for('imooc')
console.log(s5 === s6)

function foo() {
  return Symbol.for('foo')
}
let x1 = foo()
let x2 = Symbol.for('foo')
console.log(x1 === x2) // 返回true 
console.log(Symbol.keyFor(x2))

// symbol 使用场景
const stu1 = Symbol('李四')
const stu2 = Symbol('李四')
let stu = {
  [stu1]: {name: 'xxx', age: 21},
  [stu2]: {name: 'zzz', age: 22}
}
console.log(stu)
console.log(stu[stu1])
console.log(stu[stu2])

const sym = Symbol('sym')
class User {
  constructor(name) {
    this.name = name
    this[sym] = 'imooc'
  }
  getSymbol() {
    return this.name + this[sym]
  }
}

let user1 = new User('zhangsan')
console.log(user1.getSymbol())

for(let key in user1) {
  console.log(key) // 只能得到name
}

for(let key of Object.keys(user1)) {
  console.log(key) // 只能得到name
}

for(let key of Object.getOwnPropertySymbols(user1)) {
  console.log(key)  // Symbol(sym)
}

for(let key of Reflect.ownKeys(user1)){
  console.log(key) // name Symbol(sym) 两个属性都可以输出
}

// 消除魔术字符串

const shapeType = {
  triangle: Symbol(),
  circle: Symbol()
}

function getArea(shap) {
  let area = 0
  switch(shap) {
    case shapeType.triangle:
      area = 1
      break;
    case shapeType.circle:
      area = 2
      break;
  }
  return area
}

console.log(getArea(shapeType.circle))