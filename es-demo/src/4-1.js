function timeout() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(1)
    }, 2000)
  })
}
async function foo() {
  const res = await timeout()
  console.log(res)
  console.log(2)
}
foo()