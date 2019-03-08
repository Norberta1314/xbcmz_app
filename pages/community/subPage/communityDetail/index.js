const app = getApp();

Page({
  data: {
    info: {
      id: 'xxxx',
      title: 'xxxxx',
      content: 'xxxx',
      author: {
        id: 'xx',
        name: 'xxxx'
      },
      createTime: 'xxxx',
      updateTime: 'xxxx',
      comments: [{
        content: 'xxx',
        author: {
          id: 'xxx',
          name: 'xxx'
        },
        createTime: 'xxx',
        updateTime: 'xxxx'
      }
      ]
    }
  },
  onLoad(option) {
    let _this = this
    app.$store.setWxCtx(this, 'commentDetail')
    _this.getCommentDetail(option.id)
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
  }

})