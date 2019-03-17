const app = getApp();

Page({
  data: {
    tests:[{
      name: '自动控制原理',
      time: '2019年6月10日 8：10',
      place: '广之A401',
      seat: '1',
      day: 30
    }, {
      name: '自动控制原理',
      time: '2019年6月10日 8：10',
      place: '广之A401',
      seat: '1',
      day: 30
    }, {
      name: '自动控制原理与自动控制原理方案',
      time: '2019年6月10日 8：10',
      place: '广之A401',
      seat: '1',
      day: 30
    }]
  },
  onLoad() {
    let _this = this
    app.$store.setWxCtx('exam')
  },
  getExamTable(){
    let _this = this
    app.fetch({
      url: app.API('examTable'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          tests: result.name
        })

      }
    })
  }

})