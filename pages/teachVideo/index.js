const app = getApp();

Page({
  data: {
    tabList: ['视频', '直播'],
    recommentItem: ['热门', 'java', '高等数学', '概率论与数理统计', 'python', '微观经济学', '大学物理'],
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    live:[{}],
    video: [ {
      id: '123',
      imgsrc: '',
      name: '【经济】工程经济与余额宝利息之间的前缘与今世',
      auteur: '小机灵鬼yyd'
    }, {
      imgsrc: '',
      name: '【电路】电路设计从入门到年薪千万',
      auteur: '秃头小王子lyren'
    }, {
      imgsrc: '',
      name: '【安全工程】计算机与安全工程交叉学科的意义和影响',
      auteur: '万金油zxz'
    }, {
      imgsrc: '',
      name: '【礼仪】如何优雅的修眉与画眉',
      auteur: 'Tony黄'
    }, {
      imgsrc: '',
      name: '【经济】工程经济与余额宝利息之间的前缘与今世',
      auteur: '小机灵鬼yyd'
    }, {
      imgsrc: '',
      name: '【电路】电路设计从入门到年薪千万',
      auteur: '秃头小王子lyren'
    }, {
      imgsrc: '',
      name: '【安全工程】计算机与安全工程交叉学科的意义和影响',
      auteur: '万金油zxz'
    }, {
      imgsrc: '',
      name: '【礼仪】如何优雅的修眉与画眉',
      auteur: 'Tony黄'
    }, {
      imgsrc: '',
      name: '【经济】工程经济与余额宝利息之间的前缘与今世',
      auteur: '小机灵鬼yyd'
    }, {
      imgsrc: '',
      name: '【电路】电路设计从入门到年薪千万',
      auteur: '秃头小王子lyren'
    }, {
      imgsrc: '',
      name: '【安全工程】计算机与安全工程交叉学科的意义和影响',
      auteur: '万金油zxz'
    }],
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

})