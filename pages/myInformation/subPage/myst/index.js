const app = getApp();

Page({
  bindHeidong:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myst/subPage/heidong/index'
    })
  },
  bindBilinxing:function (e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myst/subPage/bilinxing/index'
    })
  },
})