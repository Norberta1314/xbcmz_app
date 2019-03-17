const app = getApp();

Page({
  data: {
    classList:['树莓1602','计科1101'],
    showClass: true,
    activeClass: false,
    iconList:[
      '/images/learning/subPages/studentNames.png',
      '/images/learning/subPages/studentGrade.png',
      '/images/learning/subPages/studentTask.png',
      '/images/learning/subPages/studentMaterial.png'
    ]
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
    const _this = this
    this.setData({
      activeClass: true
    })
    setTimeout(function () {
      _this.setData({
        showClass: false
      })
    }, 800)
  }
})