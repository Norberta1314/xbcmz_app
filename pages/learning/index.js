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
    showRead: false,
    beginMonth: 3,
    type: ''
  },
  onLoad: function(e) {
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    this.getPeople()
    if (this.data.type === 0) {
      this.getAttendence()
    }
  },

  getPeople:function() {
    let type = app.$store.getAppState('type')
    this.setData({
      type: type
    })
  },

  getAttendence() {
    let _this = this
    app.fetch({
      url:app.API('attendence'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        console.log(result)
      }
    })

    var newDate = new Date();
    var month = newDate.getMonth()
    this.setData({
      beginMonth: month + 1
    })

    var beginDay = new Date(2019, month, 1).getDay();

    var currentDate = newDate.getDate();
    // var currentDate = 23
    var currentDay = beginDay;
    var week = 0;
    for ( var i = 1; i <= currentDate; i++ ) {
      // console.log(i)
      var up = 'attendance[' + week + '][' + currentDay + ']'
      var down = 'read[' + week + '][' + currentDay + ']'
      var random = Math.ceil(Math.random() * 3)
      this.setData({
        [up]: random
      })
      random = Math.ceil(Math.random() * 5)
      this.setData({
        [down]: random
      })
      if ( currentDay === 6 ) {
        currentDay = 0;
        week++;
      } else {
        currentDay++;
      }
    }
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
  bindTeacherClass() {
    wx.navigateTo({
      url: '/pages/learning/subPages/teacherChooseClass/index',
    })
  },
   bindTeacherTimeTable() {
    wx.navigateTo({
      url: '/pages/learning/subPages/teacherChooseClass/index'
    })
   },
  bindTeacherSearchNotify() {
    wx.navigateTo({
      url: '/pages/learning/subPages/teacherSearchNotify/index'
    })
  },
  bindTeacherAttendamce() {
    wx.navigateTo({
      url: '/pages/learning/subPages/teacherAttendamce/index'
    })
  },
  bindAttTap: function (e) {
    this.setData({
      showAtt: !this.data.showAtt,
      showRead: false
    })
  },
  bindReadTap: function (e) {
    this.setData({
      showRead: !this.data.showRead,
      showAtt: false
    })
  },
  bindPass: function (e) {
    wx.navigateTo({
      url: '/pages/learning/subPage/pass/index',
    })
  }
})