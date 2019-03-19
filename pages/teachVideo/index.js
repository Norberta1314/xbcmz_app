const app = getApp();

Page({
  data: {
    tabList: ['视频', '直播'],
    recommentItem: ['热门', 'java', '高等数学', '概率论与数理统计', 'python', '微观经济学', '大学物理'],
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    live:[{}],
    video: '',
    currentTab: 0
  },
  onLoad: function() {
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    _this.getVideo()
    _this.getLive()

    for ( var i = 0; i < 10; i++ ) {
      var up = 'backgroundItem[' + i + ']'
      var rannum = Math.ceil(Math.random() * 10);
      this.setData({
        [up]: rannum
      })
    }
  },
  getVideo: function() {
    let _this = this
    app.fetch({
      url: app.API('videoON'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        for(var i = 0; i < result.length; i++) {
          let up='video['+i+']'
          _this.setData({
            [up]: result[i]
          })
        }
      },
      fail: (res) => {

      }
    })
  },

  getLive: function() {
    let _this = this
    app.fetch({
      url: app.API('live'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        console.log(res)
        for(var i = 0; i < result.length; i++) {
          let up='live['+i+']'
          _this.setData({
            [up]: result[i]
          })
        }
      }
    })
  },
  tabItemClick: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.pos
    })
  },
  tapHandleVideo: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/teachVideo/subPage/video/index?id=${id}`,
    })
  },
  tapHandleLive: function (e) {
    const id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: `/pages/teachVideo/subPage/live/index?id=${id}`,
    })
  }
})