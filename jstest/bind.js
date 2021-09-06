Function.prototype.newBind = function (obj) {
  var self = this
  return function() {
    self.apply(obj)
  }
}

var name = 'Tom'
var o = {
  name: 'Jack',
  get: function() {
    console.log(this.name)
  }
}

var fn1 = o.get
var fn2 = o.get.bind(o)
var fn3 = o.get.newBind(o)
fn1()
fn2()
fn3()