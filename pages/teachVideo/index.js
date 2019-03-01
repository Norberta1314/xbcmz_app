const app = getApp();

Page({
  data: {
    tabList: ['视频', '直播'],
    video: [ {
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
  }
})