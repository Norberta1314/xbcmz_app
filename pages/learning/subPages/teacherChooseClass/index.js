const app = getApp();

Page({
  data: {
    classList:['树莓1602','计科1101'],
    showClass: true
  },
  onLoad() {
    this.loadding()

  },
  loadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  chooseClass() {
    this.setData({
      showClass: false
    })
  }
})