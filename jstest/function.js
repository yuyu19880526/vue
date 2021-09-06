// function a() {
//   function b() {
//     var bb = 234
//   }
//   var aa = 123
//   console.log(aa)
//   b()
//   console.log(bb) // 报错
// }
// var global = 100;
// a()
// console.log(aa) // 报错
// console.log(global)

var buttons = [{name: 'b1'}, {name: 'b2'}, {name: 'b3'}];
function bind() {
  console.log(i)
  for(var i = 0; i < buttons.length; i++ ){
    console.log(i)
    buttons[i].fun = function() {
      alert(i)
    }
  }
  console.log(i)
}
bind()
// buttons[0].fun()
// buttons[1].fun()
// buttons[2].fun()