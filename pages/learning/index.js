const app = getApp();

Page({
  data: {
    attendance: [[-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1]
    ],
    read: [[-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1]
    ],
    showAtt: false,
    showRead:false
  },
  onShow: function(e) {
    var newDate = new Date();
    var beginMonth = newDate.getMonth();
    var beginDay=new Date(2019, beginMonth, 1).getDay();

    // var currentDate = newDate.getDate();
    var currentDate = 23
    var currentDay = beginDay;
    var week = 0;
    for (var i = 1; i <= currentDate; i++) {
      // console.log(i)
      var up = 'attendance[' + week + '][' + currentDay + ']'
      var down = 'read[' + week + '][' + currentDay + ']'
      var random = Math.ceil(Math.random() * 3)
      this.setData( {
        [up]: random
      })
      random = Math.ceil(Math.random() * 5)
      this.setData({
        [down]: random
      })
      if (currentDay === 6) {
        currentDay = 0;
        week++;
      } else {
        currentDay++;
      }
    }
    console.log(this.data.attendance);
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },

  bindTimeTable: function (e) {
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
  },
  bindAttTap:function (e) {
    this.setData({
      showAtt: !this.data.showAtt,
      showRead: false
    })
  },
  bindReadTap:function (e) {
    this.setData({
      showRead: !this.data.showRead,
      showAtt: false
    })
  },
})