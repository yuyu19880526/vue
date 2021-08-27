type messageType = "audio" | "image" | string

interface messageProp {
  id: number;
  type: messageType;
  sendMsg: string
}

let Message: messageProp[] = [
  { id: 1, type: 'image', sendMsg: '今晚王牌对王牌节目咋样？'},
  { id: 2, type: 'image', sendMsg: '信息？'},
  { id: 3, type: 'audio', sendMsg: '信息222？'},
  { id: 4, type: 'audio', sendMsg: '信息234234？'},
  { id: 5, type: 'image', sendMsg: '信息1111？'},
  { id: 6, type: 'audio', sendMsg: '信息9999？'},
]

function getMsg(id: number): messageProp
function getMsg(msgType: messageType, readRecordCount: number): messageProp[]

function getMsg(value: number | messageType, readRecordCount?: number) {
  if (typeof value === "number") {
    return Message.find(item => item.id === value)
  } else {
    return Message.filter(item => item.type === value).splice(0, readRecordCount)
  }
}

console.log(getMsg(4))
console.log(getMsg('audio', 3))
let msg = getMsg(1).id
// let msg = <messageProp>getMsg(3)  // 强制转换类型变成messageProp类型
// let msg = getMsg(1) as messageProp
// console.log(msg.id)