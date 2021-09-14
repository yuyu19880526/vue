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

function DeepClone(obj, isArray) {
  if (obj) {
    let newObj = isArray ? [] : {}
    for(let key in obj) {
      if (checkType(obj[key]) === 'Array') {
        DeepClone(obj[key], true)
        console.log(DeepClone(obj[key], true))
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