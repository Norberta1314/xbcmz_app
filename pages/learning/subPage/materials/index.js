const app = getApp();

Page({
  data:{
    courses:[]
  },
  onLoad() {
    let _this = this
    app.$store.setWxCtx(this, 'material')
    _this.getMaterialList()
  },
  getMaterialList() {
    let _this = this
    app.fetch({
      url: app.API('taskList'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          courses: result
        })
      }
    })
  },
  bindMaterialTap: function (e) {
    let course_name = this.data.courses[e.currentTarget.dataset.pos].course_name
    wx.navigateTo({
      url: `/pages/learning/subPage/materials/subPage/index?course_name=${course_name}`
    })
    
  }

})