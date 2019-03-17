const app = getApp();

Page({
  data: {
    tests:[]
  },
  onLoad() {
    let _this = this
    app.$store.setWxCtx(this,'exams')
    _this.getExamTable()
  },
  getExamTable(){
    let _this = this
    app.fetch({
      url: app.API('examTable'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          tests: result
        })
      }
    })
  }

})