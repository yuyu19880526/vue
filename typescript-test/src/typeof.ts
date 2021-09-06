//  大厂TS类型守卫晋级考核题【综合题】:
//  请编写一个操作对象方法和属性的函数实现以下功能
//   1. 当对象字符串属性有空格时就去掉空格后输出.
//   2. 当遇到对象方法时就执行,其他数据类型的属性一律直接输出
//   3.只有对象中包含allowoutput属性时,才允许输出。
//   4. 函数接收到外部传入的null,undefined,{}时，直接输出不是一个合法的对象。
//  考核点：1. 考核对类型守卫的熟练运用程度 2.静态方法 

interface TestInter {
  username: string,
  age: number,
  eat(): void,
  allowinput?: 1
}

// 去掉空格方法
class StaticUtil {
  public static trimSpace (str: string) {
    return str.replace(/\s+/g,'')
  }
  public static processObj(obj: any) {
    if(obj && obj.allowinput === 1) {
      let value
      Object.keys(obj).forEach(key => {
        value = obj[key]
        if (typeof value === 'string'){
          console.log('stringvalue:' + StaticUtil.trimSpace(value))
        } else if(typeof value === 'function'){
          obj[key]()
        } else {
          console.log('value:' + value )
        }
      })
    } else {
      console.log('不是一个合法的对象')
    }
  }
}

let test: TestInter = {
  username: 'as d',
  age: 23,
  eat() {
    console.log(StaticUtil.trimSpace(this.username) + '在吃东西')
  },
  allowinput: 1
}

<<<<<<< HEAD
function processObjOutput(obj:any) {
  if (typeof obj === 'object' && obj && obj.allowinput === 1 && Object.keys(obj).length > 0) {
    const objArr = Object.keys(obj)
    let value
    objArr.forEach(key => {
      value = obj[key]
      if (typeof(value) === 'string') {
        console.log(StaticUtil.trimSpace(value))
      } else if (typeof value === 'function') {
        obj[key]()
      } else {
        console.log(value)
      }
    })
  } else {
    console.log('不是一个合法的对象。')
  }
}
processObjOutput(test)
=======
// function processObjOutput(obj:any) {
//   const objArr = Object.keys(obj)
//   if (obj && obj.allowinput === 1 && objArr.length > 0) {
//     let value
//     objArr.forEach(key => {
//       value = obj[key]
//       if (typeof(value) === 'string') {
//         console.log(StaticUtil.trimSpace(value))
//       } else if (typeof value === 'function') {
//         obj[key]()
//       } else {
//         console.log(value)
//       }
//     })
//   } else {
//     console.log('不是一个合法的对象。')
//   }
// }
StaticUtil.processObj({name: 'xxs   x', allowinput: 1})
>>>>>>> 69105f0358ee3b526a6022bfe2fa470df5a963a3
