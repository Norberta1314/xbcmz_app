const app = getApp();

Page({
  data:{
    friend:[{
      name:'123',
      choose:false
    },{
      name:'456',
      choose:false
    },{
      name:'789',
      choose:false
    },{
      name:'333',
      choose:false
    },{
      name:'444',
      choose:false
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