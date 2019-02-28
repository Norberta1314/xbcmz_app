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
  },
  bindGrade: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/grade/index',
    })
  },
  bindTestTable: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/testTable/index',
    })
  },
  bindTask: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/task/index',
    })
  },
  bindMaterial: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/materials/index',
    })
  },
  bindEvaluation: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/evaluation/index',
    })
  },
  bindTeacher: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/teacher/index',
    })
  }
})