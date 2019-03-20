const app = getApp();

Page({
  data:{
    title:'',
    content:''
  },
  onLoad:function() {
    let _this = this
    app.$store.setWxCtx(this, 'addTopic')
  },
  getTitle(e){
    var val = e.detail.value
    this.setData({
      title:val
    })
  },
  getContent(e){
    var val = e.detail.value
    this.setData({
      content: val
    })
  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {

        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        this.data.images = images.length <= 3 ? images : images.slice(0, 3)
        $digest(this)
      }
    })
  },
  chooseFriend:function (e) {
    wx.navigateTo({
      url: "/pages/community/subPage/addCommunity/subPage/chooseFriend/index",
    })
  },
  chooseAdd:function(e) {
    wx.navigateTo({
      url: "/pages/community/subPage/addCommunity/subPage/chooseTag/index",
    })
  },
  choosePermission:function (e) {
    wx.navigateTo({
      url: "/pages/community/subPage/addCommunity/subPage/choosePermission/index",
    })
  },
  submit:function (e) {
    var friend = wx.getStorageSync('friend')
    var permission = wx.getStorageSync('permission')
    var tag = wx.getStorageSync('tag')
    let _this = this
    app.fetch({
      url: app.API('addCommunity'),
      method:'POST',
      data:{
        title:this.data.title,
        content:this.data.content,
        tag: tag,
        permission: permission,
        notice: friend
      },
      success: (res) => {
        wx.navigateBack(1)
      },
      fail: (res) => {
        console.log('fail')
        app.$store.setFieldState('login', {
          debouce: false
        })
      }
    })
  }
})