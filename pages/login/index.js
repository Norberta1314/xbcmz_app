import toast from '../../utils/toast';

const app = getApp()
const form = {
  username: '',
  password: '',
  userType: 0,  // 0 学生 1老师
}
Page({
  data: {
    debouce: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
    let _this = this
    app.$store.setWxCtx(this, 'login')
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          _this.setData({
            canIUse: false
          })
          wx.getUserInfo({
            success(res) {

            }
          })
        }
      }
    })

  },
  radioChaneHandle(e) {
    form['userType'] = e.detail.value
    console.log(form)
  },
  inputHandle(e) {
    const type = e.target.dataset.type
    form[type] = e.detail.value
  },
  bindGetUserInfo(e) {
    this.setData({
      canIUse: false
    })
  },
  login() {
    if ( this.data.debouce ) {
      return
    }
    this.setData({
      debouce: true
    })
    if ( !form.username || !form.password ) {
      this.setData({
        debouce: false
      })
      return wx.showModal({
        title: '错误',
        content: '账号以及密码不能为空',
        showCancel: false
      })
    }
    wx.login({
      success(res) {
        if ( !res.code ) {
          return app.toast({
            icon: 'error',
            title: '获取用户登录态失败！' + res.errMsg
          })
        }
        app.fetch({
          url: app.API('login'),
          method: 'POST',
          data: {
            username: form.username,
            password: form.password,
            usertype: form.userType,
            code: res.code
          },
          success: (res) => {
            const response = res.data
            const {token, User } = response.data
            app.$store.setAppState({
              token: token,
              type: User.type,
              username: form.username
            })
            wx.showToast({
              duration: 2000,
              title: '登录成功'
            })
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          },
          fail: (res) => {
            console.log('fail')
            app.$store.setFieldState('login', {
              debouce: false
            })

          }
        })
      }
    })
  }


})