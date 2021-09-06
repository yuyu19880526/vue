var obj = {
  a: 'hello',
  b: {
    a: 'world'
  },
  c: [11, 'Tom', 'Jay']
}
function deepClone(startObj, endObj) {
  var obj = endObj || {}
  for(var i in startObj){
    if(typeof startObj[i] === 'object'){
      obj[i] = startObj[i].constructor === Array ? [] : {}
      deepClone(startObj[i], obj[i])
    } else {
      obj[i] = startObj[i]
    }
  }
  return obj
}
//var obj1 = Object.create(obj)
var obj2 = deepClone(obj)
obj2.b.a = 'word222'
//obj.b.a = 'world111'
console.log(obj)
console.log(obj2)
//console.log(obj1)