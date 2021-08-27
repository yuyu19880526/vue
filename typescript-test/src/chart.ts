interface chartParam {
  width: number;
  height: number
}
class Chart{
  public width;
  public height
  constructor(width: number, height: number)
  constructor(paramObj: chartParam)
  constructor(widthOrObj: number | chartParam, height:number = 0) {
    if (typeof widthOrObj === 'number'){
      this.width = widthOrObj
      this.height = height
    } else {
      this.width = widthOrObj.width
      this.height = widthOrObj.height
    }
  }

  getArea():number {
    return this.width * this.height
  }
}

let squre = new Chart(10,30)
console.log(squre.getArea())
let squre2 = new Chart({width: 30, height: 76})
console.log(squre2.getArea())