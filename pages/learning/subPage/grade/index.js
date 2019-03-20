const app = getApp();

Page({
  data: {
    name: '',
    sID: '',
    select: false,
    term: '2017/2018(1)',
    gpa: 0.00,
    scores: ''
  },
  onLoad: function () {
    this.loadding()
    let _this = this
    app.$store.setWxCtx(_this, 'grade')
    _this.setName()
    _this.getGrade()
    _this.setGPA()
  },
  loadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  setName() {
    let _this = this
    app.fetch({
      url: app.API('myInfo'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          name: result.name
        })
      }
    })
    this.setState({
      sID: app.$store.getAppState('username')
    })

  },
  getGrade() {
    let _this = this
    app.fetch({
      url: app.API('grade'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        this.setState({
          scores: result
        })
        let courses = result
        let xuefen = 0
        let chengji = 0

        for ( let i = 0; i < courses.length; i++ ) {
          let course = courses[i]
          xuefen += course.credit
          if ( course.score >= 60 ) {
            chengji += (course.score - 50) * course.credit
          }
        }
        this.setData({
          gpa: (parseFloat(chengji / 10 / xuefen)).toFixed(2)
        })
      }
    })

  },
  setGPA() {
    let courses = this.data.scores
    let xuefen = 0
    let chengji = 0
    console.log(this.data.scores)
    for ( let i = 0; i < courses.length; i++ ) {
      let course = courses[i]
      xuefen += course.credit
      if ( course.score >= 60 ) {
        chengji += (course.score - 50) * course.credit
      }
    }
  },
  bindShowMsg: function () {
    this.setData({
      select: !this.data.select
    })
  }
})