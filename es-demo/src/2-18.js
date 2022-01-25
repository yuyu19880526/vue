// i 不区分大小写  m多行匹配  g全局匹配
// y修饰符 粘连修饰符
const str = 'aaa_aa_a'
const reg = /a+/g  //g 每次匹配剩余的
const reg2 = /a+/y  // y每次匹配剩余的第一个开始匹配

console.log(reg.exec(str))
console.log(reg.exec(str))
console.log(reg.exec(str))
console.log(reg.exec(str))

console.log(reg2.exec(str))
console.log(reg2.exec(str)) // null 从_aa_a的_开始匹配
console.log(reg2.exec(str)) // aa
console.log(reg2.exec(str)) // null 从_a的_开始匹配
console.log(reg2.exec(str)) // a

// u修饰符  unicode
