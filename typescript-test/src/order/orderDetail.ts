export default class orderDetail{
  public orderDetailId: number;
  public productName: string;
  public price: number;
  public count: number;

  constructor(_orderDetailId: number, _productName: string, _price:number, _count: number) {
    this.orderDetailId = _orderDetailId
    this.productName = _productName
    this.price = _price
    this.count = _count
  }
}