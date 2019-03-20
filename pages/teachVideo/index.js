const app = getApp();

Page({
  data: {
    tabList: ['视频', '直播'],
    recommentItem: [],
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    live:'',
    liveAll:'',
    video: '',
    videoAll:'',
    currentTab: 0
  },
  onLoad: function() {
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    _this.getVideo()
    _this.getLive()
    _this.getTag()


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
          let up='videoAll['+i+']'
          _this.setData({
            [up]: result[i]
          })
        }
        this.setData({
          video: this.data.videoAll
        })
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
        for(var i = 0; i < result.length; i++) {
          let up='liveAll['+i+']'
          _this.setData({
            [up]: result[i]
          })
        }
        this.setData({
          live: this.data.liveAll
        })
      }
    })
  },
  getTag: function() {
    let _this = this
    app.fetch({
      url:app.API('communityTag'),
      method:'GET',
      success:(res) => {
        const result = res.data.data
        this.setData({
          recommentItem: result
        })
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
  },
  bindChooseTagTap(e) {
    const id = e.currentTarget.dataset.pos
    this.setData({
      live:'',
      video:''
    })
    let liveAll = this.data.liveAll
    for (let i = 0; i < liveAll.length; i++) {
      if (liveAll[i].type === this.data.recommentItem[id].name) {
        this.setData({
          live:[...this.data.live, liveAll[i]]
        })
      }
    }

    let videoAll = this.data.videoAll
    for(let i = 0; i < videoAll.length; i++) {
      if(videoAll[i].type === this.data.recommentItem[id].name) {
        this.setData({
          video:[...this.data.video, videoAll[i]]
        })
      }
    }
  }
})