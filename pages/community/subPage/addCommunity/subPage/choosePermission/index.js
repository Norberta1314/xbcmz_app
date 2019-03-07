const app = getApp();

Page({
  data:{
    permission:[{
      name:'公开',
      choose:true
    },{
      name:'不公开',
      choose:false
    }]
  },
  choosePermission:function (e) {
    let pos= e.currentTarget.dataset.pos
    if (pos === 0) {
      this.setData({
        'permission[0].choose': true,
        'permission[1].choose': false
      })
    } else {
      this.setData({
        'permission[0].choose': false,
        'permission[1].choose': true
      })
    }
  },
  submit:function (e) {
    let permission = this.data.permission[0].choose? true:false
    wx.setStorageSync('permission', permission);
    wx.navigateBack(1)
  }
  
})