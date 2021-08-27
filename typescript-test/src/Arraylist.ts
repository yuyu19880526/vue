// 函数重载
class ArrayList{
  constructor(public element: Array<object>) {

  }
  get(index: number) {
    return this.element[index]
  }
  show() {
    return this.element
  }
  remove(value: number): number
  remove(value: object): object
  remove(value: number | object) {
    this.element = this.element.filter((item, index) => {
      if (typeof value === "number") {
        return index !== value
      } else {
        return item !== value
      }
    })
    return value
  }
}

let stuOne = { stuName:'张三', age:23 }
let stuTwo = { stuName:'lisa', age:26 }
let stuThree = { stuName:'jay', age:31 }

let Student = new ArrayList([stuOne, stuTwo, stuThree])
console.log(Student.show())
let removeOne = Student.remove(0)
console.log(removeOne)
console.log(Student.show())
let removeTwo = Student.remove(stuTwo)
console.log(removeTwo)
console.log(Student.show())