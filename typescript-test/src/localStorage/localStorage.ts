class localFunc {
  static localstorage: localFunc
  constructor() {}
  public static getInstance() {
    if(!this.localstorage) {
      this.localstorage = new localFunc()
    }
    return this.localstorage
  }
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  public getItem(key: string) {
    let value = localStorage.getItem(key)
    return value !== null ? JSON.parse(value) : null
  }
}