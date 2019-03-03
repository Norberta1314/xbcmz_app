const app = getApp();

Page({
  data:{
    name:''
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