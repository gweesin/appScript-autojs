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
    descriptionList: ['现金签到'],
    startUpDelay: null,
  },
  {
    id: 'Meituan',
    name: '美团',
    packageName: 'com.sankuai.meituan',
    descriptionList: ['红包签到'],
    startUpDelay: null,
  },
  {
    id: 'BaiduMap',
    name: '百度地图',
    packageName: 'com.baidu.BaiduMap',
    descriptionList: ['签到领金币'],
    startUpDelay: null,
  },
  {
    id: 'Wenku',
    name: '百度文库',
    packageName: 'com.baidu.wenku',
    descriptionList: ['签到有奖'],
    startUpDelay: 3000,
  },
  {
    id: 'BaiduNetdisk',
    name: '百度网盘',
    packageName: 'com.baidu.netdisk',
    descriptionList: ['签到领积分'],
    startUpDelay: 3000,
  },
  {
    id: 'Tieba',
    name: '百度贴吧',
    packageName: 'com.baidu.tieba',
    descriptionList: ['贴吧一键签到'],
    startUpDelay: null,
  },
  {
    id: 'QDReader',
    name: '起点读书',
    packageName: 'com.qidian.QDReader',
    descriptionList: ['签到', '抽奖','看视频抽奖'],
    startUpDelay: null,
  },
  {
    id: 'CloudMusic',
    name: '网易云音乐',
    packageName: 'com.netease.cloudmusic',
    descriptionList: ['签到赚云贝'],
    startUpDelay: null,
  },
  {
    id: 'Dianping',
    name: '大众点评',
    packageName: 'com.dianping.v1',
    descriptionList: ['签到领奖'],
    startUpDelay: null,
  },
  {
    id: 'Wifimanager',
    name: '腾讯wifi管家',
    packageName: 'com.tencent.wifimanager',
    descriptionList: ['签到赚wifi豆'],
    startUpDelay: null,
  },
  {
    id: 'Karaoke',
    name: '全民K歌',
    packageName: 'com.tencent.karaoke',
    descriptionList: ['签到领鲜花'],
    startUpDelay: null,
  },
  {
    id: 'Liwo',
    name: '梨涡',
    packageName: 'com.jd.campus',
    descriptionList: ['每日签到','分享2次个人主页(×)','关注3位好友(×)','完成发布2条动态(×)','点赞动态5次(×)','评论动态2次(×)'],
    startUpDelay: null,
  },
  {
    id: 'CSDN',
    name: 'CSDN',
    packageName: 'net.csdn.csdnplus',
    descriptionList: ['签到赢福利'],
    startUpDelay: null,
  },
  {
    id: 'Etao',
    name: '一淘',
    packageName: 'com.taobao.etao',
    descriptionList: ['签到领集分宝'],
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
    id: 'XiaomiVideo',
    name: '小米视频',
    packageName: 'com.miui.video',
    descriptionList: ['签到', '观看40个30秒视频(×)'],
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
  {
    id: 'UCMobile',
    name: 'UC浏览器',
    packageName: 'com.UCMoblie',
    descriptionList: ['签到领金币'],
    startUpDelay: 3000,
  },
  {
    id: 'Youku',
    name: '优酷视频',
    packageName: 'com.youku.phone',
    descriptionList: [
      '签到领U豆',
      '发一条弹幕(×)',
      '分享一条视频(×)',
      '发一条评论(×)',
      '分享U豆互动游戏(×)',
    ],
    startUpDelay: 3000,
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
   * @param {number} delay 点击延迟，默认2000ms
   */
  this.click = (widget, delay) => {
    // 控件不存在
    if (!widget) {
      return false
    }

    let clickDelay = 2000
    if (delay) {
      clickDelay = delay
    }

    // 控件可点击
    if (widget.clickable() === true) {
      sleep(clickDelay)
      let result = widget.click()
      return result
    }

    let rect = widget.bounds()
    sleep(clickDelay)
    let result = click(rect.centerX(), rect.centerY())
    return result
  }

  /**
   * 长按控件
   *
   * @param {Widget} widget 控件
   * @param {number} delay 点击延迟，默认2000ms
   */
  this.longClick = (widget, delay) => {
    // 控件不存在
    if (!widget) {
      return false
    }

    let delay = delay || 1000

    // 控件可点击
    if (widget.clickable() === true) {
      sleep(delay)
      let result = widget.longClick()
      return result
    }

    let rect = widget.bounds()
    sleep(delay)
    let result = longClick(rect.centerX(), rect.centerY())
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
 * 今日校园
 */
function signInCpdaily() {
  APP.click(getWidget('签到领福利', 'text'))

  return APP.click(getWidget('点此打卡', 'text'))
}

/**
 * 飞猪
 */
function signInFliggy() {
  APP.click(getWidget('里程', 'text'))
  return APP.click(getWidget('立即签到', 'text'))
}

/**
 * 京东
 */
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
  APP.click(getWidget('home_ll_btn1', 'id'))
  APP.click(getWidget('确定', 'text'))
}

/**
 * 哔哩哔哩
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
 * 支付宝
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
 * 淘宝
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
 * 饿了么
 */
function signInEle() {
  APP.click(getWidget('签到赢饭钱', 'desc'))

  APP.click(getWidget('立即签到', 'text'))

  APP.click(getWidget('¥', 'text'))

  APP.click(getWidget('分享可再翻一次卡牌', 'text'))
  APP.click(getWidget('微信', 'text'))
  sleep(2000)
  back()
  return APP.click(getWidget('¥', 'text'))
}

/**
 * 拼多多
 */
function Pinduoduo() {
  waitForActivity('com.xunmeng.pinduoduo.ui.activity.HomeActivity')

  if (id('h_').exists()) {
    APP.click(getWidget('h_', 'id', null, 1000)) // 有时有广告弹窗，需要关闭
  }
  if (id('i_').exists()) {
    APP.click(getWidget('i_', 'id', null, 1000)) // 有时有广告弹窗，需要关闭
  }
  if (id('ii').exists()) {
    APP.click(getWidget('ii', 'id', null, 1000)) // 有时有广告弹窗，需要关闭
  }
  if (id('is').exists()) {
    APP.click(getWidget('is', 'id', null, 1000)) // 有时有广告弹窗，需要关闭
  }
  APP.click(getWidget('ed', 'id', null, 1000)) // 有时有广告弹窗，需要关闭

  APP.click(getWidget('现金签到', 'text'))
  return APP.click(getWidget(/签到领.*元/, 'textMatches'))
  // APP.click(getWidget('继续领取其他福利', 'text'))
}

/**
 * 美团
 */
function signInMeituan() {
  waitForActivity('com.meituan.android.pt.homepage.activity.MainActivity')

  APP.click(getWidget('红包签到', 'desc'))
  APP.click(getWidget('cf1ef851fe4302b10efeb90541e1d6f45595', 'text'))
}

/**
 * 百度地图
 */
function signInBaiduMap() {
  waitForActivity('com.baidu.baidumaps.MapsActivity')
  
  APP.click(getWidget('个人中心', 'desc'))
  sleep(2000)
  APP.click(getWidget('签  到', 'text'))
  APP.click(getWidget(/[0-9]+人已签到/, 'textMatches'))

  sleep(1000)
  if (text('立即领取').exists()) {
    APP.click(getWidget('立即领取', 'text'))
    APP.click(getWidget('去领金币', 'text', 'parent'))

    let widget = getWidget(/\+[0-9]+金币/, 'textMatches')
    if (widget) {
      toastLog(widget.text())
      return true
    }
    return false
  }
}

/**
 * 百度文库
 */
function signInWenku() {
  waitForActivity('com.baidu.wenku.main.view.activity.MainFragmentActivity') // 首页
  APP.click(getWidget('签到有奖', 'text'))

  let widget = getWidget(/[0-9]+文库豆/, 'textMatches')
  if (!widget) {
    return false
  }
  toastLog('获得' + widget.text())
  return true
}

/**
 * 百度网盘
 */
function signInBaiduNetdisk() {
  waitForActivity('com.baidu.netdisk.ui.MainActivity')
  sleep(1000)
  APP.click(getWidget('我的', 'text'))

  APP.click(getWidget(/待领取[0-9]+积分/, 'textMatches'))
  sleep(5000)

  let widget = getWidget('currentScore', 'id')
  if (!widget) {
    return false
  }

  toastLog('百度网盘当前积分：' + widget.text())
  return true
}

/**
 * 百度贴吧签到
 */
function signInTieba() {
  waitForActivity('com.tencent.server.fore.QuickLoadActivity')
  
  APP.click(getWidget('进吧', 'text'))
  APP.click(getWidget('签到', 'desc'))

  // APP.click(getWidget('开始签到', 'text'))
  toastLog('目前暂不支持1-6级贴吧自动签到')
  sleep(2000)
  return click(550, 350)
}

/**
 * 起点读书
 */
function signInQDReader() {
  waitForActivity('com.qidian.QDReader.ui.activity.MainGroupActivity')
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
  return true
}

/**
 * 网易云音乐
 */
function signInCloudMusic() {
  APP.click(getWidget('抽屉菜单', 'desc'))
  return APP.click(getWidget('签到', 'text'))
}

/**
 * 大众点评
 */
function signInDianping() {
  APP.click(getWidget('关闭', 'desc', false, 2000))
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('每日福利', 'text'))
  return APP.click(getWidget('签到领奖', 'text'))
}

/**
 * 腾讯wifi管家
 */
function signInWifimanager() {
  waitForActivity('com.tencent.server.fore.QuickLoadActivity')
  APP.click(getWidget('sm', 'id', false,2000))
  APP.click(getWidget('我的', 'text'))
  APP.click(getWidget('签到', 'text'))
  return APP.click(getWidget('b58', 'id', false,2000))
}

/**
 * 全民K歌
 */
function signInKaraoke() {
  waitForActivity('com.tencent.karaoke.module.main.ui.MainTabActivity')
  APP.click(getWidget('任务', 'desc'))
  
  waitForActivity('com.tencent.karaoke.module.hippy.ui.HippyInstanceActivity')
  APP.click(getWidget('立刻签到', 'desc'))
  return APP.click(getWidget('立即领取', 'desc'))
}

/**
 * 梨涡
 */
function signInLiwo() {
  waitForActivity('com.jd.campus.android.yocial.MainActivity')

  APP.click(getWidget('ivCloseAd', 'id', false, 2000)) // 广告
  APP.click(getWidget('ivEventBg', 'id', false, 2000))
  APP.click(getWidget('点击领取', 'text'))
  return APP.click(getWidget('欣然收下', 'text'))
}

/**
 * CSDN
 */
function signInCSDN() {
  waitForActivity('net.csdn.csdnplus.activity.MainActivity') // 等待首页出现

  APP.click(getWidget('cancel', 'id',false, 2000)) // 关闭更新提示窗口
  APP.click(getWidget('btnAlertDialogNegative', 'id',false, 2000)) // 关闭消息通知窗口
  APP.click(getWidget('iv_close', 'id',false, 2000)) // 关闭广告

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
  APP.click(getWidget('home_market_close', 'id',false, 1000)) // 首页有可能弹出来的广告
  APP.click(getWidget('home_market_close', 'id',false, 1000)) // 关闭“开启消息通知”

  APP.click(getWidget('天天领钱', 'text'))
  return APP.click(getWidget('点我签到领钱', 'text'))
}

/**
 * e福州
 */
function signInEfuzhou() {
  APP.click(getWidget('我的', 'text'))
  return APP.click(getWidget('签到领福豆', 'text'))
}

/**
 * 有道云笔记
 */
function signInYoudaoNote() {
  APP.waitForActivity('com.youdao.note.activity2.MainActivity')
  APP.click(getWidget('我的', 'text'))
  return APP.click(getWidget('签到得空间', 'text'))
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
 * 小米视频
 */
function signInXiaomiVideo() {
  waitForActivity('com.miui.video.feature.main.MainTabActivity')
  APP.click(getWidget('我的', 'text'))

  sleep(1000)
  APP.click(getWidget('金币任务', 'text'))
  waitForActivity('com.miui.video.feature.h5.H5Activity') // 进入签到界面

  APP.click(getWidget('领取', 'textContains'))
  APP.click(getWidget('确定', 'textContains'))
  toastLog('签到成功')
  return true
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
 * WPS Office
 */
function signInWPS() {
  APP.waitForActivity('cn.wps.moffice.main.local.HomeRootActivity')

  APP.click(getWidget('我', 'text'))

  APP.click(getWidget('签到', 'text'))

  sleep(1500)
  let result = APP.click(getWidget('签到', 'text'))
  return result
}

function AppXiaoheihe() {
  /**
   * 首页向下划屏幕
   */
  this.scrollHomeScreen = () => {
    let widget = getWidget('rv', 'id')
    if (widget) {
      widget.scrollForward()
      sleep(1500)
      return true
    }
    return false
  }

  /**
   * 分享评论到社交平台
   */
  this.shareMsg = () => {
    waitForActivity('com.max.xiaoheihe.MainActivity') // 等待首页出现
    APP.click(getWidget('首页')) // 刷新

    APP.click(getWidget(/.*·[0-9]+.*前/, 'textMatches')) // 进入正文单页
    waitForActivity('com.max.xiaoheihe.module.bbs.PostActivity') // 等待正文单页出现

    APP.click(getWidget('vg_edit_comment_comment', 'id')) // 跳转评论

    APP.longClick(getWidget('vg_comments_detail', 'id')) // 长按评论
    sleep(3000)

    APP.click(getWidget('分享', 'text'))
    APP.click(getWidget('微信', 'text'))

    waitForActivity('com.tencent.mm.ui.transmit.SelectConversationUI') // 等待微信界面出现
    sleep(3000)
    back() // 退出微信界面

    sleep(2000)
    APP.click(getWidget('iv_appbar_nav_button', 'id')) // 返回首页

    return true
  }

  /**
   * 分享头条到社交平台
   */
  this.shareContent = () => {
    waitForActivity('com.max.xiaoheihe.MainActivity') // 等待首页出现
    APP.click(getWidget('首页')) // 刷新

    APP.click(getWidget(/.*·[0-9]+.*前/, 'textMatches')) // 进入正文单页
    waitForActivity('com.max.xiaoheihe.module.bbs.PostActivity') // 等待正文单页出现

    APP.click(getWidget('iv_appbar_action_button_x', 'id')) // 点击分享

    sleep(1000)

    APP.click(getWidget('微信好友', 'text'))

    waitForActivity('com.tencent.mm.ui.transmit.SelectConversationUI') // 等待微信界面出现
    sleep(3000)
    back() // 退出微信界面

    sleep(2000)
    APP.click(getWidget('iv_appbar_nav_button', 'id')) // 返回首页

    return true
  }

  /**
   * 完成5次点赞
   */
  this.fiveLike = () => {
    toastLog('开始进行点赞')
    let likeCount = 0 // 当前点赞次数

    while (true) {
      let widgetList = getWidget(
        /.*·[0-9]+.*前/,
        'textMatches',
        false,
        null,
        true
      )
      if (!widgetList) {
        return false
      }

      for (let widgetCount = 0; likeCount < 5; ) {
        let widget = widgetList[widgetCount]

        APP.click(widget) // 进入正文单页
        sleep(2000) // 缓冲时间

        let likeBtn = getWidget('vg_edit_comment_award', 'id') // 点赞按钮
        if (!APP.click(likeBtn)) {
          return false
        }

        APP.click(getWidget('iv_appbar_nav_button', 'id')) // 返回按钮

        // 五次结束循环
        if (++likeCount >= 5) {
          return true
        }
        toastLog('当前点赞次数：' + likeCount)

        // 循环3次，重新获取列表
        if (++widgetCount == 3) {
          break
        }
      }

      sleep(2500)
      this.scrollHomeScreen() // 下滑屏幕
      sleep(2500)
    }
  }
}
/**
 * 小黑盒
 */
function signInXiaoheihe() {
  let app = new AppXiaoheihe()
  APP.click(getWidget('首页'))

  if (app.fiveLike()) {
    toastLog('完成点赞5次')
    return true
  }
  if (app.shareContent()) {
    toastLog('完成分享头条到社交平台')
  }
  if (app.shareMsg()) {
    toastLog('完成分享评论到社交平台')
  }

  return true
}

/**
 * UC浏览器
 */
function signInUCMobile() {
  waitForActivity('com.uc.browser.InnerUCMobile')
  APP.click(getWidget('我 的', 'text'), 3000)
  return APP.click(getWidget('签到', 'text'), 3000)
}

/**
 * 优酷视频
 */
function signInYouku() {
  waitForActivity('com.youku.v2.HomePageEntry')

  APP.click(getWidget('知道了', 'text', false, 1000)) // 关闭青少年模式弹窗
  APP.click(getWidget('closeView', 'id', false, 1000)) // 关闭广告

  APP.click(getWidget('我的', 'text'))
  waitForActivity('com.youku.usercenter.activity.UserCenterActivity')
  APP.click(getWidget('签到领U豆', 'text'))

  return APP.click(getWidget('签到', 'desc'))
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
      APP.click(
        getWidget(/.*跳.*过.*/, 'textMatches', false, appObject.startUpDelay),
        100
      )
      sleep(2000)
      let isSuccess = appObject.signIn()
      if (isSuccess === true) {
        toastLog('已完成' + appObject.name + '的签到')
      }
      sleep(3000)
      appObject.killProgress()
      sleep(3000)
      home()
      sleep(10000) // 时间够长，才可以切换app
    }
  })

  if (selectionLength === 0) {
    toast('请勾选需要执行的脚本！')
  }
  // exit()
}

/**
 * 获得一个控件
 *
 * @param {string} str 相关字符串
 * @param {string} method 指定方法，默认text
 * @param {boolean} parent 是否要寻找父控件，默认false
 * @param {number} delay 指定延迟时间，默认OPERATION_DELAY
 * @param {boolean} isFindAll 默认为false
 */
function getWidget(str, method, parent, delay, isFindAll) {
  if (!str) {
    return null
  }

  let method = method || 'text'
  let parent = parent || false
  let delay = delay || OPERATION_DELAY
  let widgetNumber = 'One'
  if (isFindAll) {
    widgetNumber = ''
  }
  let widget = null

  let funcStr =
    method + "('" + str + "').find" + widgetNumber + '(' + delay + ')'
  if (parent === false) {
    return (widget = eval(funcStr))
  }

  return eval(funcStr + '.parent()')
}
