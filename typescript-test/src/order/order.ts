import orderDetail from "./orderDetail";
export default class Order{
  public orderId: number;
  public date: Date;
  public custname: string;
  public phone: string;
  public orderDetail: Array<orderDetail>

  constructor(_orderId: number, _date: Date, _custname: string, _phone: string, _orderDetail: Array<orderDetail>) {
    this.orderId = _orderId;
    this.date = _date;
    this.custname = _custname;
    this.phone = _phone;
    this.orderDetail = _orderDetail;
  }
}

let orderDetailOne = new orderDetail(1, '电视机', 3000, 3)
let orderDetailTwo = new orderDetail(2, '电脑', 5000, 1)
let orderDetailThree = new orderDetail(3, '冰箱', 2000, 2)

let sdate:Date = new Date(2021,8,30,18,0,0) 
let orders = new Order(1, sdate, '张三', '13222222222', [orderDetailOne, orderDetailTwo, orderDetailThree])

console.log(orders)