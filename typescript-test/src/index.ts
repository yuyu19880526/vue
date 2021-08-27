import Order from "./order/order"
class Person{
  public name: string = "zhangsan"
  public age: number = 12
  public phone:number = 13222222222

  constructor(_name:string, _age:number, _phone: number) {
    this.name = _name
    this.age = _age
    this.phone = _phone
  }
  // 类中不能用function 定义
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}一起，在${address}吃饭`) 
  }
}

let zhangsanPerson = new Person('lisa', 34, 123456786)
zhangsanPerson.age = 10
zhangsanPerson.name = '张三'
zhangsanPerson.phone = 13244433323
zhangsanPerson.doEat('李四', '大望路')
console.log(zhangsanPerson)