const app = getApp();

Page({
  data:{
    friend:{
      name:'zxz',
      info:'热爱学习热爱生活，想找女朋友'
    },
    showFriend:0,
  },
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
  tapShowFriend: function (e) {
    console.log("1")
    this.setData({
      showFriend: 1,
    })
  },
  tapUnshowFriend: function (e) {
    console.log("23")
    this.setData({
      showFriend: 0,
    })
  }
})