
class Stu {
  public username: string;
  public age: number;
  public address: string;
  public phone: string;
  constructor(username_:string, age_: number, address_:string, phone_:string) {
    this.username = username_
    this.age = age_
    this.address = address_
    this.phone = address_
  }
  public study() {
    console.log('asdhjh')
  }
}

class People extends Stu {
  constructor(username: string,  age: number, address: string, phone: string) {
    super(username, age, address, phone)
  }
  public study() {
    super.study()
  }
}

let people1 = new People('张三', 23, '北京市朝阳区', '122')
let result = people1 as Stu
result.study()