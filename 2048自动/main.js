const ra = new RootAutomator()
ra.setScreenMetrics(1080, 1920)

const swipeRight = () => swipe(400, 900, 500, 900, 1)
const swipeLeft = () => swipe(500, 900, 400, 900, 1)
const swipeUp = () => swipe(500, 900, 500, 800, 1)
const swipeDown = () => swipe(500, 800, 500, 900, 1)


while (true) {
  swipeUp()
  swipeRight()
  swipeDown()
  swipeLeft()
}
