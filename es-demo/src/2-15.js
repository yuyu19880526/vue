let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]
let s = new Set([...arr1, ...arr2])
console.log([...s])

// 判断交集

let s1 = new Set(arr1)
let s2 = new Set(arr2)

let s3 = new Set(arr1.filter(item => s2.has(item)))
console.log([...s3])