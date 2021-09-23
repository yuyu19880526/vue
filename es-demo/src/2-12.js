function Animal(name) {
  this.name = name
  this.say = function() {
    console.log('hello')
  }
}

Animal.prototype.showName = function() {
  console.log('名字是：', this.name)
}


// Animal.call只能继承构造函数属性方法，不能继承原型方法，如果想继承原型方法，
// 则需要用prototype指向Animal 的prototype,并且把构造函数指回来Dog
function Dog(name, color) {
  Animal.call(this, name) 
  this.color = color
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('xx', 'white')
dog1.say()
dog1.showName()
