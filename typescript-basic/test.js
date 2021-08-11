// const hi = (name:string) => {
//   return `hello ${name}`
// }
// hi('mm')
// let arrOfNumber: number[] = [1,32,4]
// 面相对象oop 封装、继承、多态
// class Animal {
//   name: string
//   constructor(name) {
//     this.name = name
//   }
//   run() {
//     return `${this.name} is running`
//   }
// }
// const snake = new Animal('lily')
// console.log(snake.run())
// class Dog extends Animal{
//   bark() {
//     return `${this.name} is barking`
//   }
// }
// const xiaogou = new Dog('xiaobao')
// console.log(xiaogou.bark())
// class Cat extends Animal{
//   static categories = ['mammal']
//   constructor(name) {
//     super(name)
//     console.log(this.name)
//   }
//   run() {
//     return 'Meow' + super.run()
//   }
// }
// const maomao = new Cat('maomao')
// console.log(maomao.run())
// console.log(Cat.categories)
// interface Radio {
//   switchRadio(trigger: boolean): void
// }
// interface checkBattery{
//   checkBatteryStatus(): void
// }
// interface RadioWidthBattery extends Radio {
//   checkBatteryStatus(): void
// }
// class Car implements Radio {
//   switchRadio(trigger: boolean){
//   }
// }
// class Cellphone implements RadioWidthBattery {
//   switchRadio(trigger: boolean) {
//   }
//   checkBatteryStatus() {
//   }
// }
var Driction;
(function (Driction) {
    Driction[Driction["up"] = 10] = "up";
    Driction[Driction["down"] = 11] = "down";
    Driction[Driction["left"] = 12] = "left";
    Driction[Driction["right"] = 13] = "right";
})(Driction || (Driction = {}));
console.log(Driction[0]);
console.log(Driction.up);
