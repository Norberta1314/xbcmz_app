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
    wx.showModal({
      title: '提示',
      content: '已提交修改申请，请等待管理员审核。',
      cancelText: '返回',
      success:function(res){
        if(res.confirm){
          console.log('用户点击确定')
        }else if(res.cancel){
          console.log('用户点击取消')
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }

})