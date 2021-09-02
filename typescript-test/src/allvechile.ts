// 需求1:汽车租赁功能实现: 有小轿车,大巴,卡车三种类型的车,顾客可以租任意一种或多种不同类型的车,按照租用的天计算租金， 同时为了响应国家对各类车安全的管理, 对在租赁期内有过各种超载，超乘客数，酒后驾车等违规的车需额外支付一定的费用。
// 需求2:计算退回费用：最终退回顾客的费用为押金扣除使用天数，如押金不足需额外支付不足部分。
// 思考小轿车,大巴,卡车共同属性:  品牌 ( brand )  vechileNo ( 车牌号 )  days 
// ( 租赁天数 ) total ( 支付的租赁总费用 )  deposit ( 押金 )
// 思考小轿车,大巴,卡车共同方法: 计算租赁车的价格 ( calculateRent)  
//  支付押金的方法( payDesposit)
// 		安全检测方法（safeShow)
// 父类：Vechile   交通工具。
class Vechile {
  static count: number = 3;
  public brand: string;
  public vechileNo: string;
  public days: number;
  public total!: number;
  public deposit: number;
  constructor (brand_: string, vechileNo_:string, days_:number, deposit_: number) {
    this.brand = brand_;
    this.vechileNo = vechileNo_;
    this.days = days_;
    this.deposit = deposit_;
  }
  public payDesposit() {
    console.log(`${this.brand}车牌号为：${this.vechileNo}支付了${this.deposit}元押金`)
  }
  public safeShow() {
    console.log("车规则....");
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
  }
  public calculateRent() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租")
  }
}

class Car extends Vechile {
  public type: string;//车的型号
  constructor(brand_: string, vechileNo_:string, days_:number, deposit_: number, type_: string) {
    super(brand_, vechileNo_, days_, deposit_)
    this.type = type_
  }
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800;
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400;
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }

  public calculateRent() {
    super.calculateRent()
    this.total = this.days * this.getPriceByType()
    console.log(this.getPriceByType())
    console.log("Car:", Car.count)
    console.log("this.brand:", this.brand)
    console.log(`合计${this.total}元`)
  }
}

let car1 = new Car('丰田', '京A8888', 20, 3000, '普拉多巡洋舰')
car1.calculateRent()