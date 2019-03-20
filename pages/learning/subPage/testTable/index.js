const app = getApp();

Page({
  data: {
    tests:[]
  },
  onLoad() {
    let _this = this
    _this.loadding()
    app.$store.setWxCtx(this,'exams')
    _this.getExamTable()
  },
  loadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  getExamTable(){
    let _this = this
    app.fetch({
      url: app.API('examTable'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        let dateNOW = new Date()

        for (let i = 0; i < result.length; i++) {
          let dateTest = result[i].time
          let date = new Date(dateTest)
          let date2 = date.getTime() - dateNOW.getTime()
          let days = Math.floor(date2/(24*3600*1000))
          result[i].day = days
        }
        console.log(result)

        _this.setData({
          tests: result
        })
      }
    })
  }

})