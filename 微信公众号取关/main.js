auto.waitFor()
// app.startActivity({
//   packageName: 'com.tencent.mm',
//   className: 'com.tencent.mm.ui.LauncherUI',
// })
console.show()
// className('com.tencent.mm.ui.mogic.WxViewPager').waitFor()
// className('android.widget.FrameLayout').findOne()
//   .child(0) // LinearLayout
//   .child(2) // RelativeLayout 通讯录按钮
//   .click()

// className('com.tencent.mm.ui.mogic.WxViewPager').findOne()
//   .child(2) // 2nd ListView
//   .child(0) // LinearLayout
//   .child(3) // last LinearLayout 公众号按钮
//   .click()

// className('android.widget.ListView').waitFor()
while (true) {
  const listView = className('android.widget.ListView').findOne()
  const count = listView.childCount()
  if (count === 0) break
  // for (let i = 0, item, t, name; i < count; i += 1) {
  //   item = listView.child(i)
  //   t = item.children()
  //   name = t.get(t.size() - 1)
  //   console.log(i + ': ' + name.text())

  //   // exit()
  // }
  let t = listView.child(0).children()
  let name = t.get(t.size() - 1)
  console.log(name.text())
  listView.child(0).longClick()

  text('取消关注').findOne().click()
  text('不再关注').findOne().click()
}

toast('end')
