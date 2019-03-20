const app = getApp();

Page({
  data: {
    info: '',
    id: ''
  },
  onLoad(option) {
    let _this = this
    app.$store.setWxCtx(this, 'commentDetail')
    this.setData({
      id: option.id
    })
  },
  onShow(option) {
    this.getCommentDetail(this.data.id)
  },
  getCommentDetail:function (id) {
    let _this = this
    app.fetch({
      url:app.API('commentDetail') + id,
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          info:result
        })
        console.log(this.data.info)
      }
    })
  },
  addComment() {
    this.onShow()
  }

})