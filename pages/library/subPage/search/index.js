const app = getApp();

Page({
  data:{
    name:''
  },
  getSearch:function (e) {
    var val = e.detail.value
    this.setData({
      name:val
    })
  }
})