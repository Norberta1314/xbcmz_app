const app = getApp();

Page({
  data: {
    name: '',
    sid: '',
    academy: '',
    class: '',
    contact_type: '',
    email: '',
    home_address: ''
  },
  onLoad: function (e) {
    let _this = this
    app.$store.setWxCtx(this, 'myinfo')
    this.getMyinfo()
  },
  getMyinfo() {
    let _this = this
    app.fetch({
      url: app.API('myInfo'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          name: result.name,
          sid: result.sid,
          academy: result.academy,
          class: result.class,
          contact_type: result.contact_type,
          email: result.email,
          home_address: result.home_address
        })
      },
      fail: (res) => {

      }
    })
  },
  edit() {

  }

})