if (!requestScreenCapture()) exit()
sleep(1000)
const x = 488
const y = 1185
const blue = "#ff1986ff"
const white = "#ffffffff"
const getc = () => colors.toString(images.pixel(captureScreen(), x, y))


setScreenMetrics(1080, 1920)
events.observeKey()
events.observeTouch()
const start = () => click(800, 900)

const e = () => {
    const c = getc()
    if (c === white) {
        gestures([100, [730, 1600], [700, 200]]);
        //swipe(730, 1600, 730, 700, 200)
    } else {
        gestures([100, [730, 1600], [300, 1600]])
        //swipe(730, 1600, 300, 1600, 200)
    }
    setTimeout(() => e(), 200)
}
const main = () => {
    start()
    sleep(500)
    e()
}
const end = () => {
  toast('quit')
  while(isRunning()) exit()
}
events.on('key', () => end())
events.onTouch(() => end())
setImmediate(() => main())
