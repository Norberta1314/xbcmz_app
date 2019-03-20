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
    type: '',
    timeTable:[[
      {
        isLesson: 1,
        lessonNum: 2,
        place: '第一教学楼220',
        name: '操作系统'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第二教学楼302',
        name: '高等数学'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第一教学楼203',
        name: '离散数学'
      }
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第三教学楼330',
        name: '高等数学'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第二教学楼304',
        name: '数据结构'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      },{
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      },{
        isLesson: 1,
        lessonNum: 2,
        place: '第三教学楼223',
        name: '数据结构'
      },
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第四教学楼114',
        name: '离散数学'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第二教学楼333',
        name: '离散数学'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '第一教学楼220',
        name: '离散数学'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      },{
        isLesson: 1,
        lessonNum: 2,
        place: '第二教学楼208',
        name: '离散数学'
      }
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }
    ], [
      {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }
    ]],
    today:''
  },
  onLoad: function(e) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)

    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    this.getPeople()
    if (this.data.type === 0) {
      this.getAttendence()
    }
    _this.getTodayTimeTable()
  },
  getTodayTimeTable(){
    let today = new Date().getDay();
    this.setData({
      today: today
    })

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
      url: '/pages/learning/subPages/teatherTimeTable/index'
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