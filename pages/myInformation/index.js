const app = getApp();

Page({
  
  bindSearchInfo: function(e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myInfoDetail/index',
    })
  },
  bindMyst:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myst/index'
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
  }
})