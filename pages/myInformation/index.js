const app = getApp();

Page({
  data:{
    week:'',
    weeks:['日','一','二','三','四','五','六'],
    sID:''
  },
  onLoad(){
    let _this = this
    app.$store.setWxCtx(_this, 'grade')
    this.getNowTime()
    this.setState({
      sID: app.$store.getAppState('username')
    })
  },
  getNowTime() {
    let date = new Date()

    console.log( date.getDay())
    this.setData({
      week: this.data.weeks[date.getDay()]
    })
  },
  bindSearchInfo: function(e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myInfoDetail/index',
    })
  },
  bindMyst:function (e) {
    wx.navigateTo({
      url: '/pages/callOver/index'
    })
  },
  bindCert:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/certificate/index'
    })
  },
  bindPunch:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/punch/index'
    })
  },
  bindTalk:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/talk/index'
    })
  },
  bindComunity:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/community/index'
    })
  },
  bindWalk:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/walk/index'
    })
    wx.navigateBack()
  },
  loginOut:function () {
    wx.navigateTo({
      url: '/pages/login/index'
    })
  }
})