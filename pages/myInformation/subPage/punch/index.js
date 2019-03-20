const app = getApp();

Page({
  data:{
    checks:[{
      id:0,
      title: '单词打卡',
      content:'每天背60个考研单词',
      status: 1,
      time: 23,
      showCard: false
    },{
      id:1,
      title:'阅读打卡',
      content:'每天在星露谷学习平台内学习2个小时',
      status: 0,
      time:10,
      showCard: false
    }, {
      id:2,
      title:'跑步打卡',
      content:'每天跑步2km',
      status: 0,
      time:60,
      showCard: false
    }]
  },
  bindCheckItem(e) {
    let id = e.currentTarget.dataset.id
    let check = this.data.checks[id]
    let up = 'checks[' + id + '].showCard'
    if (check.showCard === false) {
      this.setData({
        [up]: true
      })
    }
  },
  catchDelayTap(e) {
    let id = e.currentTarget.dataset.id
    let up = 'checks[' + id + '].showCard'
    let upp = 'checks[' + id + '].status'
    this.setData({
      [up]: false,
      [upp]: 1
    })
  },
  catchPunchTap(e) {
    let id = e.currentTarget.dataset.id
    let up = 'checks[' + id + '].showCard'
    let up1 = 'checks[' + id + '].time'
    let upp = 'checks[' + id + '].status'
    let time = this.data.checks[id].time
    this.setData({
      [up1]: time + 1,
      [upp]: 1,
      [up]: false
    })
  },
  catchCompleteTap(e) {
    let id = e.currentTarget.dataset.id
    let up = 'checks[' + id + '].showCard'
    this.setData({
      [up]: false
    })
  }

})