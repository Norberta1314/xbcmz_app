const app = getApp();

Page({
  data: {
    weekday:['日', '一', '二', '三', '四', '五', '六', '日'],
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
      },
      {
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
    bg_num: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
  },
  onLoad: function(e) {
    let _this = this
    app.$store.setWxCtx(this, 'timeTable')
    _this.getTimeTable()
  },
  onShow: function() {
    for ( var i = 0; i < 8; i++ ) {
      for (var j = 0; j < 12; j++) {
        var up = 'bg_num[' + i + '][' + j + ']'
        var ram = Math.ceil(Math.random() * 10)
        this.setData({
          [up]: ram
        })
      }
    }
  },
  getTimeTable: function () {
    let _this = this
    app.fetch({
      url: app.API('timeTable'),
      method: 'GET',
      success: (res) => {
        const resule = res.data.data
      },
      fail: (res) => {

      }
    })
  }
})