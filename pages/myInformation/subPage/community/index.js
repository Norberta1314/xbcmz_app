const app = getApp();

Page({
  onLoad() {
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
})