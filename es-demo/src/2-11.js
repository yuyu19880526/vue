function People(name, age) {
  console.log(this)
  this.name = name
  this.age = age
}

People.prototype.showName = function() {
  console.log('我的名字是', this.name)
}

let p1 = new People('mm', 33)
p1.showName()

let p2 = new People('zhangsan', 22)
p2.showName()