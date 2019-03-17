// pages/learning/subPage/task/subPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_name: '',
    listData:'',
    dataFalse: false
  },

  onLoad: function (option) {
    console.log(option)
    this.setData({
      course_name: option.course_name
    })
  },

})
