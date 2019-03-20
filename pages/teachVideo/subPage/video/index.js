const app = getApp();

Page({
  data:{
    tabList: ['简介', '评价'],
    currentTab: 0,
    info:'',
    autoTranlate:'自动翻译'
  },
  onLoad(option) {
    let _this = this
    app.$store.setWxCtx(this, 'videoDemand')
    _this.getVideoDetail(option.id)

  },
  getVideoDetail:function(id){
    let _this = this
    app.fetch({
      url:app.API('videoDetail' ) + id,
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        console.log(result)
        let date = result.create_time.slice(0, 10)
        _this.setData({
          info:result,
          'info.create_time' : date,
        })
      }
    })
  },
  tabItemClick: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.pos
    })
  },
  autoTranlate: function (e) {
    if (this.data.autoTranlate === '自动翻译') {
      this.setData({
        autoTranlate:'取消翻译'
      })
    } else {
      this.setData({
        autoTranlate:'自动翻译'
      })
    }
  },
  addComment() {
    this.onShow()
  }
})