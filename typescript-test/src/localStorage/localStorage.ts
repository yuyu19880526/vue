class localFunc {
  // 构建单件设计模式
  // 第一步把构造器设置为私有的，不允许外部来创建类的实例
  // 第二步建立一个静态引用属性，同时把这个静态引用属性直接指向一个对象
  // 第三步外部调用第二步提供的静态方法来获取一个对象
  static localstorage: localFunc = new localFunc()
  private constructor() {
    console.log('这是一个单件设计模式对象')
  }
  // public static getInstance() {
  //   if(!this.localstorage) {
  //     this.localstorage = new localFunc()
  //   }
  //   return this.localstorage
  // }
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  public getItem(key: string) {
    let value = localStorage.getItem(key)
    return value !== null ? JSON.parse(value) : null
  }
}
