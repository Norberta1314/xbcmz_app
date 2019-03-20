const app = getApp();

Page({
  onLoad(){
    this.onLoadding()
  },
  onLoadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
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