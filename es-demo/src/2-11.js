function People(name, age) {
  console.log(this) // this 指向实例对象本身
  this.name = name
  this.age = age
  People.count++
}

People.prototype.showName = function() {
  console.log('我的名字是', this.name)
}

People.count = 0
People.showCount = function(){
  console.log(this) // this 指向的是构造函数本身 所以这里调用不到this.name this.age
  console.log('调用的个数是', People.count)
}

let p1 = new People('mm', 33)
p1.showName()

let p2 = new People('zhangsan', 22)
p2.showName()

// 显示2
People.showCount()

