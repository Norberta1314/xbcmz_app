const app = getApp();

Page({
  data:{
    friend:[{
      name:'生如夏花',
      choose:false
    },{
      name:'解忧杂货铺',
      choose:false
    },{
      name:'计算机组成与原理',
      choose:false
    },{
      name:'现代操作系统',
      choose:false
    },{
      name:'离散数学',
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