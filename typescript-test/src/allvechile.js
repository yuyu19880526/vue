var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 需求1:汽车租赁功能实现: 有小轿车,大巴,卡车三种类型的车,顾客可以租任意一种或多种不同类型的车,按照租用的天计算租金， 同时为了响应国家对各类车安全的管理, 对在租赁期内有过各种超载，超乘客数，酒后驾车等违规的车需额外支付一定的费用。
// 需求2:计算退回费用：最终退回顾客的费用为押金扣除使用天数，如押金不足需额外支付不足部分。
// 思考小轿车,大巴,卡车共同属性:  品牌 ( brand )  vechileNo ( 车牌号 )  days 
// ( 租赁天数 ) total ( 支付的租赁总费用 )  deposit ( 押金 )
// 思考小轿车,大巴,卡车共同方法: 计算租赁车的价格 ( calculateRent)  
//  支付押金的方法( payDesposit)
// 		安全检测方法（safeShow)
// 父类：Vechile   交通工具。
var Vechile = /** @class */ (function () {
    function Vechile(brand_, vechileNo_, days_, deposit_) {
        this.brand = brand_;
        this.vechileNo = vechileNo_;
        this.days = days_;
        this.deposit = deposit_;
    }
    Vechile.prototype.payDesposit = function () {
        console.log(this.brand + "\u8F66\u724C\u53F7\u4E3A\uFF1A" + this.vechileNo + "\u652F\u4ED8\u4E86" + this.deposit + "\u5143\u62BC\u91D1");
    };
    Vechile.prototype.safeShow = function () {
        console.log("车规则....");
        console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
    };
    Vechile.prototype.calculateRent = function () {
        console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
    };
    Vechile.count = 3;
    return Vechile;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand_, vechileNo_, days_, deposit_, type_) {
        var _this = _super.call(this, brand_, vechileNo_, days_, deposit_) || this;
        _this.type = type_;
        return _this;
    }
    // 根据车的型号来获取租用一天该型号车的租金
    Car.prototype.getPriceByType = function () {
        var rentMoneyByDay = 0; //每天的租金
        if (this.type === "普拉多巡洋舰") {
            rentMoneyByDay = 800;
        }
        else if (this.type === "凯美瑞旗舰版") {
            rentMoneyByDay = 400;
        }
        else if (this.type === "威驰智行版") {
            rentMoneyByDay = 200;
        }
        return rentMoneyByDay;
    };
    Car.prototype.calculateRent = function () {
        _super.prototype.calculateRent.call(this);
        this.total = this.days * this.getPriceByType();
        console.log(this.getPriceByType());
        console.log("Car:", Car.count);
        console.log("this.brand:", this.brand);
        console.log("\u5408\u8BA1" + this.total + "\u5143");
    };
    return Car;
}(Vechile));
var car1 = new Car('丰田', '京A8888', 20, 3000, '普拉多巡洋舰');
car1.calculateRent();
