const app = getApp();

Page({
  data:{
    friend:[{
      name:'123',
      choose:false
    },{
      name:'123',
      choose:true
    },{
      name:'123',
      choose:false
    },{
      name:'123',
      choose:false
    },{
      name:'123',
      choose:true
    }]
  },
  chooseFriend:function (e) {
    let up='friend[' + e.currentTarget.dataset.pos + '].choose'
    if(this.data.friend[e.currentTarget.dataset.pos].choose) {
      this.setData({
        [up]: false
      })
    } else {
      this.setData({
        [up]: true
      })
    }
  },
  submit:function (e) {
    let tagList=[]
    let tag = this.data.friend
    for(let i = 0; i < tag.length; i++) {
      if (tag[i].choose) {
        tagList.push(tag[i].name)
      }
    }wx.setStorageSync('tag', tag);
    wx.navigateBack(1)
  }
})