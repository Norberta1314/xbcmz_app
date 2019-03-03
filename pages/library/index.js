const app = getApp();

Page({
  data: {
    people: 0,
    peopleNum: 1,
    moonList: ['../../images/library/moon/1.png',
    '../../images/library/moon/2.png',
    '../../images/library/moon/3.png',
    '../../images/library/moon/4.png',
    '../../images/library/moon/5.png']
  },

  onShow: function () {
    var num = Math.ceil(Math.random() * 100);
    this.setData({
      peopleNum: num
    })
    console.log(num);
    if (num < 20) {
      this.setData({
        people: 0
      })
    } else if (num < 40) {
      this.setData({
        people: 1
      })
    } else if (num < 60) {
      this.setData({
        people: 2
      })
    } else if (num < 80) {
      this.setData({
        people: 3
      })
    } else {
      this.setData({
        people: 4
      })
    }
    console.log(this.data.people)
  },
  bindTapAdvice: function (e) {
    wx.navigateTo({
      url: '/pages/library/subPage/advice/index',
    })
  },
  bindTapSearch: function (e) {
    wx.navigateTo({
      url: '/pages/library/subPage/search/index',
    })
  }
})