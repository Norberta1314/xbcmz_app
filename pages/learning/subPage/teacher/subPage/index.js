const app = getApp();

Page({
  data:{
    name: '',
    email: '',
    tel: ''
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
        this.setData({
          name: data.teacher_name,
          email: data.email,
          tel: data.phone
        })
      }
    })
  }

})