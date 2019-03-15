const app = getApp();

Page({
  data:{
    name:''
  },
  onLoad:function(e){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  getSearch:function (e) {
    var val = e.detail.value
    this.setData({
      name:val
    })
  },
  bindTapSearch: function (e) {
    var name = this.data.name
    wx.navigateTo({
      url: `/pages/library/subPage/search/subPage/index?name=${name}`,
    })
  }
})