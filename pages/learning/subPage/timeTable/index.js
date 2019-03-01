const app = getApp();

Page({
  data: {
    weekday:['日', '一', '二', '三', '四', '五', '六', '日'],
    timeTable:[[
      {
        isLesson: 1,
        lessonNum: 2,
        place: '仁和211',
        name: '自动控制原理'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '仁和211',
        name: '自动控制原理'
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
        place: '仁和211',
        name: '自动控制原理'
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
        place: '仁和211',
        name: '自动控制原理'
      }, {
        isLesson: 0,
        lessonNum: 1,
        place: '',
        name: ''
      }, {
        isLesson: 1,
        lessonNum: 2,
        place: '仁和211',
        name: '自动控制原理'
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
        place: '仁和211',
        name: '自动控制原理'
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
        isLesson: 1,
        lessonNum: 2,
        place: '仁和211',
        name: '自动控制原理'
      }
    ], [

    ], [

    ], [

    ], [

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

    console.log(this.data.bg_num)
    // Do something when page show.
  },
})