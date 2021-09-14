// 数组的各种遍历方式

let arr = [1,2,3,4,3,2]

// for 循环， 可以break  continue 等
for(let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue; // break continue 都支持
  }
  console.log(arr[i])
}

// forEach循环 缺点不能continue  break
arr.forEach((item, index, arr) => {
  console.log(item, index) // 不支持break  continue
})

// map 循环可以返回一个新的数组
// result 返回一个新的数组
let result = arr.map(item => {
  item += 1
  return item
})
console.log(arr, result)

// filter 返回一个符合条件的新数组
let result1 = arr.filter(item => {
  return item === 2
})
console.log(arr, result1)

// 返回布尔值，循环只要有一条满足条件返回true
let result2 = arr.some(item => {
  return item === 2
})
console.log(arr, result2)

// 返回布尔值，循环必须所有数据都满足才会返回true
let result3 = arr.every(item => {
  return item > 0
})
console.log(arr, result3)


// 返回计算结果
let sum = arr.reduce((pre, cur, index, array) => {
  return pre + cur
}, 0)
console.log(sum)

// 返回计算结果，用于去重
let res = arr.reduce((pre, cur) => {
  pre.indexOf(cur) === -1 && pre.push(cur)
  return pre 
}, [])
console.log(res)

// 返回符合条件的一条数据
let res1 = arr.find(item => {
  return item === 2
})
console.log(res1)

// 返回符合条件的一条数据的索引
let res2 = arr.findIndex(item => {
  return item === 4
})
console.log(res2)

// for in 缺点，会把数组当对象循环，数组方法也会被循环遍历出来
for(let item of arr){
  console.log('for of', item)
}

// for of 循环
for(let item of arr.values()) {
  console.log(item)
}

for(let key of arr.keys()) {
  console.log(key)
}

for(let [key, val] of arr.entries()) {
  console.log(key, val)
}