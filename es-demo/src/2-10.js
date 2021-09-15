let obj = {
  a: 1,
  b: 'imooc',
  c: ['x', 'y', 'z'],
  d: {
    xyz: 'xyz',
    dd: {
      p: 'o'
    }
  }
}
// 检查类型
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(Object.prototype.toString.call([]))

function DeepClone(obj, isArr) {
  if (obj) {
    let newObj = isArr ? [] : {}
    for(let key in obj) {
      if (typeof obj[key] === 'object') {
        const isArr = !!checkType(obj[key]) === 'Array'
        newObj[key] = DeepClone(obj[key], isArr)
      } else {
        newObj[key] = obj[key]
      }
    }
    return newObj
  } else {
    console.log('请输入符合对象')
  }
}

let obj2 = DeepClone(obj)
console.log(obj2)