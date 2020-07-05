const OPERATION_DELAY = 6000

function getOneWidget(str, method, parent, delay) {
  if (!str) {
    return null
  }

  let method = method || 'text'
  let parent = parent || false
  let delay = delay || OPERATION_DELAY
  let widget = null

  let funcStr = method + "('" + str + "').findOne(" + delay + ')'
  if (parent === false) {
    return (widget = eval(funcStr))
  }

  if (widget === null) {
    return null
  }
  return eval(funcStr + '.parent()')
}

function AppObject(id, name, packageName, startUpDelay) {
  const defaultStartUpDelay = 5000

  this.id = id
  this.name = name
  this.packageName = packageName
  this.startUpDelay = startUpDelay || defaultStartUpDelay

  /**
   * 点击控件
   *
   * @param {Widget} widget 控件
   */
  this.click = (widget) => {
    // 控件不存在
    if (!widget) {
      return false
    }

    // 控件可点击
    if (widget.clickable() === true) {
      return widget.click()
    }

    let rect = widget.bounds()
    return click(rect.centerX(), rect.centerY())
  }

  /**
   * 运行app
   */
  this.launch = () => {
    app.launchPackage(this.packageName)
  }

  /**
   * 签到
   */
  this.signIn = () => {
    return eval('signIn' + this.id + '()')
  }

  /**
   * 关闭app
   */
  this.killProgress = () => {
    shell('am force-stop ' + this.packageName, true)
  }
}
APP = new AppObject()


// dialogs.multiChoice(, , , )

// var options = ["选项A", "选项B", "选项C", "选项D"]
// var i = dialogs.multiChoice("请选择一个选项", options);
// if(i){
//   toastLog(i)
//     toast("您选择的是" + options[i]);
// }else{
//     toast("您取消了选择");
// }

let i = getOneWidget('照片', 'text')
toastLog(i.text())