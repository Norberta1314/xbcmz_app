const app = getApp();

Page({
  data:{
    friend:[{
      name:'前言',
      choose:false
    },{
      name:'第一章',
      choose:true
    },{
      name:'第二章',
      choose:false
    },{
      name:'第三章',
      choose:false
    },{
      name:'第四章',
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
    let friendList=[]
    let friend = this.data.friend
    for(let i = 0; i < friend.length; i++) {
      if (friend[i].choose) {
        friendList.push(friend[i].name)
      }
    }
    wx.setStorageSync('friend', friendList);
    wx.navigateBack(1)
  }
})