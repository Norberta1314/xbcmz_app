const app = getApp();

Page({
  data: {
    name: 'zxz',
    sID: '201600001111',
    select: false,
    term: '2017/2018(1)',
    gpa: 0.00,
    scores: ''
  },
  onLoad: function () {
    let _this = this
    app.$store.setWxCtx(_this, 'grade')
    _this.setName()
    _this.getGrade()
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
      sID:app.$store.getAppState('username')
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
      }
    })
  },
  bindShowMsg: function () {
    this.setData({
      select: !this.data.select
    })
  }
})