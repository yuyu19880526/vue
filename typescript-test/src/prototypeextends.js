function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.friends = ['小张','lili']
Parent.prototype.eat = function() {
  console.log(`${this.name}吃饭`)
}
function Son(name, age, favor, sex) {
  Parent.call(this, name, age)
  this.favor = favor
  this.sex = sex
}
Son.prototype = new Parent()
Son.prototype.constructor = Son
let sonObj = new Son('lisi', 34, '打篮球', '男')
console.log(sonObj)
// Son.prototype = new Parent('李四', 41)
// Son.prototype.constructor = Son
// let parent = new Parent('张三', 23)
// console.log('parent:', parent)
// let son = new Son('唱歌跳舞', '男')
// console.log('son:',son)

// console.log('Son.prototype:', Son.prototype)

// console.log(son.favor)
// console.log(son.name)
// console.log(son.age)


