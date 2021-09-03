function People(name, age) {
  this.name = name
  this.age = age
}

let person = new People('张三', 23)
console.log(person)

let obj = new Object()
console.log('obj:', obj)

obj.__proto__ = People.prototype
console.log('obj1:', obj)

People.call(obj, '张三1', 24)
console.log('obj2:', obj)