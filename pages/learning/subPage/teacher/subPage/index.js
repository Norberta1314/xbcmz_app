const app = getApp();

Page({
  data:{
    name: '',
    email: '',
    tel: '',
    number: 0
  },
  onLoad:function (option) {
    let _this = this
    app.$store.setWxCtx(this, 'teacherDetail')
    _this.getTeacherDetail(option.name)
  },
  getTeacherDetail(name){
    console.log(name)
    let _this = this
    app.fetch({
      url:app.API('teacherSearch'),
      method: 'POST',
      data:{
        query_string:name
      },
      success: (res) => {
        let data = res.data.data
        console.log("获取教师信息成功")
        console.log(data)
        this.setData({
          name: data.teacher_name,
          email: data.email,
          tel: data.phone,
          number: 1
        })
        if (this.data.name === '') {
          _this.setData( {
            number: 0
          })
          _this.showModal()
        }
      },
      fail: (res) => {
        _this.showModal()
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '抱歉',
      content: '抱歉，我们没有聘用相关教师……',
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
  },

})