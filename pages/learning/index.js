const app = getApp();

Page({
  data: {
    // calendarimg: '<view class='attendance_calendar'></view>'
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },

  bindTimeTable: function(e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/timeTable/index',
    })
  }
})