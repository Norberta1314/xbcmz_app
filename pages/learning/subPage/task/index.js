const app = getApp();

Page({
  data:{
    courses:[
      {name:'数据结构'},
      {name:'离散数学'},
      {name:'高等数学'},
      {name:'概率论'},
      {name:'角色造型'},
      {name:'数据库'},
      {name:'操作系统'},
      {name:'计算机原理'},
      {name:'计算机网络'}
    ]
  },
  bindTaskTap: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/task/subPage/index',
    })
  }
  
})