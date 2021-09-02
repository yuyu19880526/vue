function People (name, sex, phone) {//父类 【父构造函数】
  this.name = name;
  this.sex = sex;
  this.phone = phone;
  this.play = function() {
    console.log(`${this.name}玩游戏`)
  }
  this.sayHello = sayHello
}

function sayHello() {
  console.log(this.name + ' hello')
}
People.prototype.friend = ['张三', '李四']
People.prototype.eat = function() {
  console.log(`${this.name}吃东西`)
}

function ChinesePeople(name, sex, phone, national ) {
  People.call(this, name, sex, phone)
  // People.sayHello.call(this)
  this.national = national
  this.sayHello = function() {
    console.log('wqyeuyqwuey')
  }
}


// 继承
function _extends(parent, son) {
  function Middle () {
    this.constructor = son
  }
  Middle.prototype = parent.prototype
  return new Middle()
}

let middle =  _extends(People, ChinesePeople)
console.log('middle:', middle)
let ChinesePeople1 = new ChinesePeople('lisa', '男', '12344', '汉族')

let ChinesePeople2 = new ChinesePeople('王五', '男', '23555', '傣族')
ChinesePeople1.sayHello()
console.log('ChinesePeople1:', ChinesePeople1)
console.log('ChinesePeople2:', ChinesePeople2)

// function SuperType() {
//   this.property = true
// }

// SuperType.prototype.getSuperValue = function() {
//   return this.property
// }

// function SubType() {
//   this.subProperty = false
// }

// SubType.prototype = new SuperType()

// SubType.prototype.getSubValue = function() {
//   return this.subProperty
// }

// const inst = new SubType()
// console.log(inst.getSubValue())
// console.log(inst.getSuperValue())