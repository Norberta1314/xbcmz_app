const app = getApp();

Page({
  
  bindSearchInfo: function(e) {
    wx.navigateTo({
      url: '/pages/myInformation/subPage/myInfoDetail/index',
    })
  }
})