class People {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._sex = -1
  }
  showName() {
    console.log('名字是：', this.name)
  }
  get sex() {
    if (this._sex === 0) {
      return 'male'
    } else if(this._sex === 1) {
      return 'female'
    } else {
      return 'err'
    }
  }
  set sex(val) {
    (val === 0 || val === 1) && (this._sex = val)
  }
}

class Coder extends People {
  constructor(name, age, work) {
    super(name, age)
    this.work = work
  }
  showWork() {
    console.log(this.work)
  }
}
let p1 = new Coder('zhangsan', 23, 'imooc')
p1.sex = 1
console.log(p1.sex)
console.log(p1)
p1.showName()
p1.showWork()