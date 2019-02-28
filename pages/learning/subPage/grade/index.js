const app = getApp();

Page({
  data: {
    name: 'zxz',
    sID: '201600001111',
    select: false,
    term: '2017/2018(1)',
    gpa: 4.15,
    scores: [{
      score: 98,
      name: '自动控制原理'
    }, {
      score: 90,
      name: '商务英语'
    }, {
      score: 93,
      name: '工程经济'
    }, {
      score: 85,
      name: '角色造型'
    }, {
      score: 90,
      name: '操作系统原理'
    }, {
      score: 90,
      name: '计算机动画'
    }, {
      score: 98,
      name: '自动控制原理'
    }, {
      score: 90,
      name: '商务英语'
    }, {
      score: 93,
      name: '工程经济'
    }, {
      score: 85,
      name: '角色造型'
    }, {
      score: 90,
      name: '操作系统原理'
    }, {
      score: 90,
      name: '计算机动画'
    }]
  },
  bindShowMsg: function () {
    this.setData({
      select: !this.data.select
    })
  }
})