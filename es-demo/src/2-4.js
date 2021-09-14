let arr = [1,2,3,4,3,2]

for(let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue; // break continue 都支持
  }
  console.log(arr[i])
}

arr.forEach((item, index, arr) => {
  console.log(item, index) // 不支持break  continue
})

// result 返回一个新的数组
let result = arr.map(item => {
  item += 1
  return item
})
console.log(arr, result)

let result1 = arr.filter(item => {
  return item === 2
})
console.log(arr, result1)

let result2 = arr.some(item => {
  return item === 2
})
console.log(arr, result2)

let result3 = arr.every(item => {
  return item > 0
})
console.log(arr, result3)

let sum = arr.reduce((pre, cur, index, array) => {
  return pre + cur
}, 0)
console.log(sum)

let res = arr.reduce((pre, cur) => {
  pre.indexOf(cur) === -1 && pre.push(cur)
  return pre 
}, [])
console.log(res)

let res1 = arr.find(item => {
  return item === 2
})
console.log(res1)

let res2 = arr.findIndex(item => {
  return item === 4
})
console.log(res2)

for(let item of arr){
  console.log('for of', item)
}

for(let item of arr.values()) {
  console.log(item)
}

for(let key of arr.keys()) {
  console.log(key)
}

for(let [key, val] of arr.entries()) {
  console.log(key, val)
}