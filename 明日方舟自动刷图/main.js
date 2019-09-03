"auto"
requestScreenCapture()
events.observeTouch()
events.observeKey()
setScreenMetrics(1440, 3120)
const getColor = (x, y) => {
  return colors.toString(images.pixel(captureScreen(), x, y))
}

const clickSign = () => {
}

const waitReturn = () => {
  // while (1) {
  // }
}

var times = 0
var max
const repeat = () => {
  waitReturn()
  if (max && times > max) return exit()
  console.log('times: ' + times)
  times += 1
  sleep(1000)
  click(2700, 1300) // 开始行动
  console.log(1)
  sleep(1000)
  click(2600, 1300) // 开始行动
  console.log(2)
  sleep(120e3)
  click(2700, 1300) // 结束
  console.log(3)
  sleep(5000)
  repeat()
}

const init = () => {
  if (confirm('show debug')) console.show()
  max = dialogs.input('repeat', '40')
  repeat()
}

events.on('exit', () => toast('exit'))
events.on('touch', () => exit())

init()
