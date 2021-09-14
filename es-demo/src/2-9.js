
let name = 'xxx'
let age = 33
const obj = {
  name,
  age,
  stduy() {}
}
console.log(obj)

// Object.is 是严格判断两个值是否相等
// Object.is 和 === 区别在于，Object.is判断NaN返回结果是true, === 返回结果是false
console.log(Object.is(2, '2'))

let obj1 = {
  name,
  age
}
let obj2 = {
  name,
  age
}

console.log(obj1 == obj2)
console.log(Object.is(obj1, obj2))

let x = {
  a: 'a',
  b: 'b'
}
let y = {
  b: 'x',
  c: 'c'
}
Object.assign(y, x)
console.log(y)

console.log('a' in x)

const arr = [1, 2, 3]
console.log(3 in arr) // 3 代表索引位置是否有值


let obj3 = {
  name: 'xiaoxiao',
  age: 33,
  school: 'imooc'
}

for (let key in obj3) {
  console.log('for in 循环' + key, obj3[key])
}

Object.keys(obj3).forEach(key => console.log('object.key循环' + key, obj3[key]))

Object.getOwnPropertyNames(obj3).forEach(key => console.log(key, obj3[key]))

console.log(Object.getOwnPropertyDescriptor(obj))

const keyA = {a: 1}
const keyB = {b: 2}
const myObj = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
}
console.log(myObj)


const Person = {
  sayName() {
    console.log('hello')
  }
}
console.log(Person.sayName.name) // 函数的name 属性


const obj4 = {
  get foo() {},
  set foo(x) {}
}
// obj4.foo.name 报错
const desc = Object.getOwnPropertyDescriptor(obj4, 'foo')

console.log(desc.get.name)
console.log(desc.set.name)

console.log((new Function()).name)

var doSomething = function() {}
console.log(doSomething.bind().name)