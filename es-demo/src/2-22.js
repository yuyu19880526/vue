// 发送ajax请求

function ajax(url, callback) {
  var xmlhttp = ''
  if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest
  } else { //兼容早期IE
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 发送请求
  xmlhttp.open('GET', url, true)
  xmlhttp.send()

  //服务端响应
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var obj = JSON.parse(xmlhttp.responseText)
      callback(obj)
    }
  }
}
var url = 'https://www.fastmock.site/mock/72729968d4bb8fb9f2e9e57ee3f7a385/jdtest/api/order'
ajax(url, res=> {
  console.log(res)
})