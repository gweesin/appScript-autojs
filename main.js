"ui";
const OPERATION_DELAY = 6000
const marginLeftValue = 10
let appData = [
  {
    id: 'Cpdaily',
    name: '今日校园',
    packageName: 'com.wisedu.cpdaily',
    descriptionList: ['签到领福利'],
    startUpDelay: null,
  },
  {
    id: 'Fliggy',
    name: '飞猪',
    packageName: 'com.taobao.trip',
    descriptionList: ['签到', '做任务赚里程(×)'],
    startUpDelay: null,
  },
  {
    id: 'JD',
    name: '京东',
    packageName: 'com.jingdong.app.mall',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'JianShu',
    name: '简书',
    packageName: 'com.jianshu.haruki',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Msg',
    name: '口袋梦三国',
    packageName: 'com.dh.mengsanguoolex',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Bilibili',
    name: '哔哩哔哩',
    packageName: 'tv.danmaku.bili',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Alipay',
    name: '支付宝',
    packageName: 'com.eg.android.AlipayGphone',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Taobao',
    name: '淘宝',
    packageName: 'com.taobao.taobao',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'QQMusic',
    name: 'QQ音乐',
    packageName: 'com.tencent.qqmusic',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Ele',
    name: '饿了么',
    packageName: 'me.ele',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Pinduoduo',
    name: '拼多多',
    packageName: 'com.xunmeng.pinduoduo',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Meituan',
    name: '美团',
    packageName: 'com.sankuai.meituan',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'BaiduMap',
    name: '百度地图',
    packageName: 'com.baidu.BaiduMap',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Tieba',
    name: '百度贴吧',
    packageName: 'com.baidu.tieba',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'QDReader',
    name: '起点读书',
    packageName: 'com.qidian.QDReader',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'CloudMusic',
    name: '网易云音乐',
    packageName: 'com.netease.cloudmusic',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Dianping',
    name: '大众点评',
    packageName: 'com.dianping.v1',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Wifimanager',
    name: '腾讯wifi管家',
    packageName: 'com.tencent.wifimanager',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Karaoke',
    name: '全民K歌',
    packageName: 'com.tencent.karaoke',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Liwo',
    name: '梨涡',
    packageName: 'com.jd.campus',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'CSDN',
    name: 'CSDN',
    packageName: 'net.csdn.csdnplus',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Etao',
    name: '一淘',
    packageName: 'com.taobao.etao',
    descriptionList: [],
    startUpDelay: null,
  },
  {
    id: 'Efuzhou',
    name: 'e福州',
    packageName: 'com.digitalchina.mobile.dfhfz1',
    descriptionList: ['签到领福豆'],
    startUpDelay: null,
  },
  {
    id: 'YoudaoNote',
    name: '有道云笔记',
    packageName: 'com.youdao.note',
    descriptionList: ['签到得内存空间'],
    startUpDelay: null,
  },
  {
    id: 'Everphoto',
    name: '时光相册',
    packageName: 'tc.everphoto',
    descriptionList: ['签到得内存空间'],
    startUpDelay: null,
  },
  {
    id: 'XiaomiGameCenter',
    name: '小米游戏中心',
    packageName: 'com.xiaomi.gamecenter',
    descriptionList: ['签到送现金'],
    startUpDelay: null,
  },
  {
    id: 'Yangshipin',
    name: '央视频',
    packageName: 'com.cctv.yangshipin.app.androidp',
    descriptionList: ['签到', '积分抽奖'],
    startUpDelay: null,
  },
  {
    id: 'Weilai',
    name: '蔚来',
    packageName: 'cn.com.weilaihui3',
    descriptionList: ['签到', '积分抽奖'],
    startUpDelay: null,
  },
  {
    id: 'WPS',
    name: 'WPS Office',
    packageName: 'cn.wps.moffice_eng',
    descriptionList: ['签到', '稻壳签到(×)'],
    startUpDelay: null,
  },
  {
    id: 'Xiaoheihe',
    name: '小黑盒',
    packageName: 'com.max.xiaoheihe',
    descriptionList: [
      '签到',
      '完成5次点赞',
      '分享头条到社交平台',
      '分享评论到社交平台',
    ],
    startUpDelay: null,
  },
]

let appList = []
for (let index = 0; index < appData.length; index++) {
  appList.push(
    new AppObject(
      appData[index].id,
      appData[index].name,
      appData[index].packageName,
      appData[index].descriptionList,
      appData[index].startUpDelay
    )
  )
}

ui.layout(
  <frame>
    <vertical>
      <list id="scripts">
        <card
          w="*"
          h="auto"
          margin="10 5"
          cardBackgroundColor="{{this.bg}}"
          cardElevation="5dp"
          cardCornerRadius="15dp"
        >
          <horizontal w="*" margin="6 6 6 6" bg="{{this.bg}}">
            <frame layout_weight="1" layout_height="match_parent">
              <vertical layout_weight="1" layout_height="match_parent">
                <checkbox
                  id="{{this.id}}"
                  text="{{this.name}}  "
                  textSize="18sp"
                  textColor="black"
                  layout_weight="1"
                  gravity="left|center"
                ></checkbox>
                <text id="desc" text="{{this.desc}}" textSize="15sp"></text>
              </vertical>
            </frame>
          </horizontal>
        </card>
      </list>
    </vertical>
    <vertical gravity="bottom|center" marginBottom="20">
      {/* <button id="confirm" text="确定"/> */}
      <fab id="confirm" text="确定"></fab>
    </vertical>
  </frame>
)

threads.start(function () {
  var config = {
    appId: '填写你自己的',
    appKey: '填写你自己的',
  }

  // 间隔行变色
  for (var i = 0; i < appList.length; i++) {
    if (i % 2 == 0) {
      appList[i].bg = '#87CEEB'
    } else {
      appList[i].bg = '#C0FF3E'
    }
  }

  log('ui.scripts.setDataSource(appList) appList=')
  log(appList)
  // 设置list内容, 添加点击事件
  ui.run(function () {
    ui.scripts.setDataSource(appList)
    ui.scripts.on('item_click', function (item, i, itemView, listView) {
      var info = itemView.desc.text()
      alert(info)
    })
  })
})

ui.confirm.click(() => {
  threads.start(function () {
    main()
  })
})

/**
 * app基类构造方法
 *
 * @param {string} id app英文名称
 * @param {string} name app名称
 * @param {string} packageName app的包名
 * @param {string[]} descriptionList 任务描述列表
 * @param {number} startUpDelay 启动app的延迟时间，单位毫秒; 默认5000
 */
function AppObject(id, name, packageName, descriptionList, startUpDelay) {
  const defaultStartUpDelay = 5000

  this.id = id
  this.name = name
  this.packageName = packageName
  this.startUpDelay = startUpDelay || defaultStartUpDelay
  this.desc = dealDescriptionList(descriptionList)

  /**
   * 处理descriptionList的函数
   * 处理效果：
   * 原descriptionList = ['1', '2', '3']
   * description = ' - 1\n - 2\n - 3\n'
   *
   * @param {string[]} descriptionList
   */
  function dealDescriptionList(descriptionList) {
    let description = ''

    // 存在descriptionList
    if (descriptionList && descriptionList.length > 0) {
      for (let index = 0; index < descriptionList.length; index++) {
        description += ' - ' + descriptionList[index] + '\n'
      }
    }
    return description
  }

  /**
   * 等待活动出现
   *
   * @param {string} activityName 活动名称
   */
  this.waitForActivity = (activityName) => {
    waitForActivity(activityName)
    sleep(1000)
  }

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
      let result = widget.click()
      sleep(500)
      return result
    }

    let rect = widget.bounds()
    let result = click(rect.centerX(), rect.centerY())
    sleep(500)
    return result
  }

  /**
   * 运行app
   *
   * @returns {boolean} 如果存在app返回true，否则返回false
   */
  this.launch = () => {
    return app.launchPackage(this.packageName)
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

const APP = new AppObject()

/**
 * 飞猪签到里程
 */
function signInFliggy() {
  APP.click(getWidget('里程', 'text'))
  APP.click(getWidget('立即签到', 'text'))
}

function signInJD() {
  APP.click(getWidget('领京豆', 'text'))
  APP.click(getWidget('签到领京豆', 'text'))

  APP.click(getWidget('种豆瓜分京豆', 'text'))

  // 种京豆，领京豆
  while (APP.click(getWidget(/x[0-9]+/, 'textMatches'))) {
    sleep(1500)
  }
}

/**
 * 简书转盘抽奖
 */
function signInJianShu() {
  APP.click(getWidget('tab_mine', 'id'))
  sleep(2000)
  APP.click(getWidget('天天抽奖', 'text'))
  sleep(5000)
  APP.click(getWidget('android.view.View', 'className'))
  sleep(10 * 1000)
  click(560, 1560)
}

/**
 * 口袋梦三国签到
 */
function signInMsg() {
  sleep(5000)
  App.click(getWidget('home_ll_btn1', 'id'))
  App.click(getWidget('确定', 'text'))
}

/**
 * 哔哩哔哩签到辣条
 */
function signInBilibili() {
  waitForActivity('tv.danmaku.bili.MainActivityV2') // 等待B站首页出现
  APP.click(getWidget('我知道了', 'text', false, 2000))
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('更多', 'text'))

  waitForActivity('com.bililive.bililive.liveweb.ui.LiveHybridWebViewActivity')
  return APP.click(getWidget('签到', 'text'))
}

/**
 * 支付宝签到积分
 */
function signInAlipay() {
  APP.click(getWidget('我的', 'text'))
  sleep(2000)
  APP.click(getWidget('支付宝会员', 'text'))
  sleep(1500)
  APP.click(getWidget('领积分', 'text'))
  sleep(1000)
  for (let i = 0; i < 5; i++) {
    APP.click(getWidget('点击领取', 'text'))
    sleep(1500)
  }
}

/**
 * 淘宝淘金币签到
 */
function signInTaobao() {
  APP.click(getWidget('领淘金币', 'desc'))
  APP.click(getWidget('立即签到', 'text'))
}

/**
 * QQ音乐
 */
function signInQQMusic() {
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('活动中心', 'text'))
  APP.click(getWidget('立即领取', 'text'))
  APP.click(getWidget('立 即 领 取', 'text'))
}

/**
 * 百度地图
 */
function signInBaiduMap() {
  APP.click(getWidget('个人中心', 'desc'))
  APP.click(getWidget('签  到', 'text'))
  APP.click(getWidget(/[0-9]+人已签到/, 'textMatches'))

  sleep(1000)
  if (text('立即领取').exists()) {
    text('立即领取').click()
    text('去领金币').findOne(4000).parent().click()

    textMatches(/\+[0-9]+金币/)
      .findOne(4000)
      .click()
  }
}

/**
 * 饿了么
 */
function signInEle() {
  APP.click(getWidget('签到赢饭钱', 'desc'))

  APP.click(getWidget('立即签到', 'text'))

  APP.click(getWidget('品质联盟', 'textMatches'))

  APP.click(getWidget('分享可再翻一次卡牌', 'text'))
  APP.click(getWidget('微信', 'text'))
  APP.click(getWidget('返回', 'desc'))
  APP.click(getWidget('品质联盟', 'textMatches'))
}

/**
 * 今日校园
 */
function signInCpdaily() {
  APP.click(getWidget('签到领福利', 'text'))

  APP.click(getWidget('点此打卡', 'text'))
}

/**
 * 美团红包签到
 */
function signInMeituan() {
  APP.click(getWidget('红包签到', 'desc'))
  APP.click(getWidget('cf1ef851fe4302b10efeb90541e1d6f45595', 'text'))
}

/**
 * 拼多多
 */
function Pinduoduo() {
  if (id('h_').exists()) {
    APP.click(getWidget('h_', 'id')) // 有时有广告弹窗，需要关闭
  }
  if (id('i_').exists()) {
    APP.click(getWidget('i_', 'id')) // 有时有广告弹窗，需要关闭
  }
  if (id('ii').exists()) {
    APP.click(getWidget('ii', 'id')) // 有时有广告弹窗，需要关闭
  }
  if (id('is').exists()) {
    APP.click(getWidget('is', 'id')) // 有时有广告弹窗，需要关闭
  }

  APP.click(getWidget('现金签到', 'text'))
  APP.click(getWidget(/签到领.*元/, 'textMatches'))
  // APP.click(getWidget('继续领取其他福利', 'text'))
}

/**
 * 百度贴吧签到
 */
function signInTieba() {
  APP.click(getWidget('进吧', 'text'))
  APP.click(getWidget('签到', 'desc'))

  // APP.click(getWidget('开始签到', 'text'))
  toastLog('目前暂不支持1-6级贴吧自动签到')
  sleep(2000)
  click(550, 350)
}

/**
 * 起点读书
 */
function signInQDReader() {
  APP.click(getWidget('fClose', 'id', false, 2000))
  APP.click(getWidget(/领[0-9]+点/, 'textMatches'))
  APP.click(getWidget('今日奖励翻倍', 'text'))

  // 看广告
  sleep(20 * 1000)
  APP.click(getWidget('android.widget.ImageView', 'className')) // 关闭广告
  sleep(1000)
  APP.click(getWidget('抽奖', 'text'))

  let flag = false
  while (true) {
    if (APP.click(getWidget('抽 奖', 'text'))) {
      flag = true
      continue
    }
    if (APP.click(getWidget('看视频抽奖喜+1', 'text'))) {
      sleep(20 * 1000)
      APP.click(getWidget('android.widget.ImageView', 'className')) // 关闭广告
      flag = true
      continue
    }

    if (flag === false) {
      break
    }
  }
}

/**
 * 网易云音乐签到
 */
function signInCloudMusic() {
  APP.click(getWidget('抽屉菜单', 'desc'))
  APP.click(getWidget('签到', 'text'))
}

/**
 * 大众点评签到
 */
function signInDianping() {
  APP.click(getWidget('关闭', 'desc', false, 2000))
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('每日福利', 'text'))
  APP.click(getWidget('签到领奖', 'text'))
}

/**
 * 腾讯wifi管家签到
 */
function signInWifimanager() {
  APP.click(getWidget('sm', 'id', 2000))
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('签到', 'text'))
  APP.click(getWidget('b58', 'id', 2000))
}

/**
 * 全民K歌签到
 */
function signInKaraoke() {
  APP.click(getWidget('h7b', 'id'))
  APP.click(getWidget('立刻签到', 'desc'))
  APP.click(getWidget('立即领取', 'desc'))
}

/**
 * 梨涡
 */
function signInLiwo() {
  APP.click(getWidget('ivCloseAd', 'id', false, 2000))
  APP.click(getWidget('ivEventBg', 'id'))
  APP.click(getWidget('点击领取', 'text'))
  APP.click(getWidget('欣然收下', 'text'))

  // APP.click(getWidget('我的', 'text'))
  // APP.click(getWidget('签到领钱', 'text'))
  // APP.click(getWidget('点击领取', 'text'))
}

/**
 * CSDN签到
 */
function signInCSDN() {
  sleep(6000)
  click(971, 2097) // 点击"我的"
  APP.click(getWidget('签到', 'text'))
  sleep(3000)
  click(540, 1213) // 点击"签到"

  APP.click(getWidget('iv_back', 'id')) // 返回
}

/**
 * 一淘
 */
function signInEtao() {
  APP.click(getWidget('home_market_close', 'id')) // 首页有可能弹出来的广告

  APP.click(getWidget('天天领钱', 'text'))
  APP.click(getWidget('点我签到领钱', 'text'))
}

/**
 * e福州
 */
function signInEfuzhou() {
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('签到领福豆', 'text'))
}

/**
 * 有道云笔记
 */
function signInYoudaoNote() {
  APP.waitForActivity('com.youdao.note.activity2.MainActivity')
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('签到得空间', 'text'))
}

/**
 * 时光相册
 */
function signInEverphoto() {
  APP.waitForActivity('everphoto.ui.feature.main.MainActivity')
  APP.click(getWidget('avatar', 'id')) // 点击头像

  APP.click(getWidget('action_daily_check_in', 'id')) // 点击签到

  // 打印获取的内存大小
  let widget = getWidget(/签到成功 您已获得[0-9]+MB/, 'textMatches')
  if (widget) {
    toastLog(widget.text())
    return true
  }
  return false
}

/**
 * 小米游戏中心
 */
function signInXiaomiGameCenter() {
  APP.waitForActivity('com.xiaomi.gamecenter.ui.MainTabActivity')
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('每日任务', 'text'))

  APP.waitForActivity(
    'com.xiaomi.gamecenter.ui.task.activity.DailyTaskActivity'
  ) // 签到页面
  APP.click(getWidget('点击签到', 'text')) // 点击签到
}

/**
 * 央视频
 */
function signInYangshipin() {
  APP.waitForActivity('com.tencent.videolite.android.ui.HomeActivity')
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('签到', 'text'))

  let widget = getWidget('开始抽奖', 'text')
  if (widget) {
    APP.click(widget)
    APP.click(getWidget('确定', 'text'))
    return true
  }
  return false
}

/**
 * 蔚来
 */
function signInWeilai() {
  APP.waitForActivity('cn.com.weilaihui3.app.ui.activity.HomeActivity')
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('立即签到', 'text'))

  let widget = getWidget(/已签到.*天/, 'textMatches')
  if (widget) {
    toastLog('蔚来' + widget.text())
    return true
  }
  return false
}

/**
 * WPS
 */
function signInWPS() {
  APP.waitForActivity('cn.wps.moffice.main.local.HomeRootActivity')

  APP.click(getWidget('我', 'text'))

  APP.click(getWidget('签到', 'text'))

  return APP.click(getWidget('签到', 'text'))
}

function main() {
  let selectionLength = 0
  appList.forEach((appObject) => {
    if (ui[appObject.id] == null) {
      return false
    }

    let isSelected = ui[appObject.id].checked
    if (isSelected === true) {
      selectionLength += 1

      let hasApp = appObject.launch()

      if (hasApp === false) {
        return toastLog(appObject.name + '未安装')
      } else {
        toastLog(appObject.name + '启动中...')
      }
      APP.click(getWidget(/.*跳.*过.*/, 'textMatches'))
      sleep(2000)
      let isSuccess = appObject.signIn()
      if (isSuccess === true) {
        toastLog('已完成' + appObject.name + '的签到')
      }
      sleep(2000)
      appObject.killProgress()
    }
  })

  if (selectionLength === 0) {
    toast('请勾选需要执行的脚本！')
  }
  // exit()
}
main()

/**
 * 获得一个控件
 *
 * @param {string} str 相关字符串
 * @param {string} method 指定方法，默认text
 * @param {boolean} parent 是否要寻找父控件，默认false
 * @param {number} delay 指定延迟时间，默认OPERATION_DELAY
 * @param {string} widgetNumber 默认为One, 填''(空字符串)表示findAll
 */
function getWidget(str, method, parent, delay, widgetNumber) {
  if (!str) {
    return null
  }

  let method = method || 'text'
  let parent = parent || false
  let delay = delay || OPERATION_DELAY
  let widgetNumber = widgetNumber || 'One'
  let widget = null

  let funcStr =
    method + "('" + str + "').find" + widgetNumber + '(' + delay + ')'
  if (parent === false) {
    return (widget = eval(funcStr))
  }

  if (widget === null) {
    return null
  }
  return eval(funcStr + '.parent()')
}
