const app = getApp();

Page({
  data: {
    name: ''
  },
  onLoad: function () {
    let _this = this
    app.$store.setWxCtx(this, 'searchTeacher')
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  getSearch: function (e) {
    var val = e.detail.value
    this.setData({
      name: val
    })
  },
  bindTapSearch: function (e) {
    wx.navigateTo({
      url: `/pages/learning/subPage/teacher/subPage/index?name=${ this.data.name }`,
    })
  }
})