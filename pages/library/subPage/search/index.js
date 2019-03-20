const app = getApp();

Page({
  data:{
    name:''
  },
  onLoad:function(e){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  getSearch:function (e) {
    var val = e.detail.value
    this.setData({
      name:val
    })
  },
  bindTapSearch: function (e) {
    var name = this.data.name
    let _this = this

    if(name !== '白夜行') {
      _this.showModal()
    } else {
      wx.navigateTo({
        url: `/pages/library/subPage/search/subPage/index?name=${name}`,
      })
    }
  },
  showModal() {
    wx.showModal({
      title: '抱歉',
      content: '请联系管理员添加相关书籍',
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