"auto"
requestScreenCapture()
events.observeTouch()
events.observeKey()
setScreenMetrics(1080, 1920)
const getColor = (x, y) => {
  return colors.toString(images.pixel(captureScreen(), x, y))
}

const clickSign = () => {
}

const waitReturn = () => {
  while (1) {
    if (getColor(1000, 380) === "#ff151515") return true
    if (getColor(955, 675) === "#ff0084ff") {
      return click(955, 675)
    }
    sleep(1000)
    console.log('waiting return')
  }
}

var times = 0
var max
const oneDay = () => {
  waitReturn()
  if (max && times > max) return exit()
  console.log('day: ' + times)
  times += 1
  sleep(100)
  click(1800, 400) // 道具
  sleep(100)
  click(1000, 700) // 道具强化
  sleep(100)
  click(1700, 1000) // 均衡强化
  sleep(200)
  click(1700, 800) // 取消
  sleep(100)
  click(1700, 500) // 基地
  sleep(100)
  click(1400, 850) // 银行x10
  sleep(100)
  click(1700, 1000) // 战斗开始
  sleep(100)
  click(800, 900) // 战斗开始
  sleep(30000)
  oneDay()
}

const init = () => {
  toast('wait for game start')
  waitForPackage('com.GameCoaster.ProtectDungeon', 500)
  if (confirm('show debug')) console.show()
  max = dialogs.input('days', '300')
  oneDay()
}

events.on('exit', () => toast('exit'))
events.on('touch', () => exit())

init()
