//app.js
import Wxstore from './utils/store'
import Fetch from './utils/fetch'
import API from './utils/api'
import toast from './utils/toast'
import envConfig from 'env'


//config
const localStorageKey = 'localStorageKey'

const store = new Wxstore({
  app: {
    userInfo: null,
    weappInfo: null,
  }
}, {})
const env = (key) => envConfig[key]
const systemInfo = wx.getSystemInfoSync()
const isDev = systemInfo.platform === 'devtools'
const fetch = Fetch({
  $store: store,
  isDev
})

//end config


App({
  onLaunch: function () {
    store.setWxCtx(this, 'app')
    this.login()

  },

  // utils
  isLogin() {
    return !!store.getAppState('token')
  },


  // end utils

  login() {
    this.autoLogin()
  },


  autoLogin() {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if ( !res.code ) {
          return toast({
            icon: 'error',
            title: '获取用户登录态失败！' + res.errMsg
          })
        }
        fetch({
          url: API('autoLogin'),
          method: 'POST',
          data: {
            code: res.code
          },
          success: (res) => {
            const response = res.data
            const {token, User } = response.data
            if ( response.code < 0 ) {
              if ( response.code == -201 ) {
                console.log('test')
                // todo 切换绑定页面
                wx.navigateTo({
                  url: '/pages/login/index'
                })

                return toast({
                  icon: 'error',
                  title: response.msg
                })
              }
              return
            }
            store.setAppState({
              token: token,
              type: User.type
            })
            toast({
              title: '自动登录成功'
            })
          }
        })
      }
    })


  },


  afterLogin() {

  },


  //本地储存
  set(key, value) {
    const tempStorage = wx.getStorageSync(localStorageKey)
    Object.assign(tempStorage, {
      [key]: value
    })
    wx.setStorageSync(localStorageKey, tempStorage)
  },
  get(key) {
    const tempStorage = wx.getStorageSync(localStorageKey)
    return tempStorage[key]
  },
  //end 本地储存


  systemInfo,
  isDev: systemInfo.platform === 'devtools',
  env,
  API,
  fetch,
  toast,
  $store: store,
})