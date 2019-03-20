const app = getApp();

Page({
  data: {
    tabList: ['社区', '推荐'],
    recommentItem: [],
    currentTab: 0,
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    comments: [],
    suggestItem:[{
      id:0,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }, {
      id:1,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }, {
      id:2,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }, {
      id:3,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }, {
      id:4,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }]
  },
  onLoad(){

  },
  onShow(){
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    this.gettopics()
    this.getTag()
  },
  getTag: function() {
    let _this = this
    app.fetch({
      url:app.API('communityTag'),
      method:'GET',
      success:(res) => {
        const result = res.data.data
        this.setData({
          recommentItem: result
        })
      }
    })
  },
  gettopics(){
    let _this = this
    app.fetch({
      url:app.API('topics'),
      method: 'GET',
      success: (res) => {
        let result = res.data.data
        result = result.reverse()
        _this.setData({
          comments: result
        })
      }
    })
  },
  tapHandleComment: function(e) {
    const id = e.currentTarget.dataset.id
    console.log(id)
    console.log(this.data.comments)
    wx.navigateTo({
      url: `/pages/community/subPage/communityDetail/index?id=${id}`,
    })
  },
  tabItemClick: function (e) {
    for ( var i = 0; i < 10; i++ ) {
      var up = 'backgroundItem[' + i + ']'
      var rannum = Math.ceil(Math.random() * 10);
      this.setData({
        [up]: rannum
      })
    }
    this.setData({
      currentTab: e.currentTarget.dataset.pos
    })
  },
  recommentItemClick: function (e) {
    this.setData({
      currentRecomment: e.currentTarget.dataset.pos
    })
  },
  likeClick: function (e) {
    console.log('click like')
    var index = e.currentTarget.dataset.pos
    var like = 'comments[' + index + '].stared'
    var likeNum = 'comments[' + index + '].star_num'
    var likeNums = this.data.comments[index].star_num;
    console.log()

    if ( this.data.comments[index].stared === false ) {
      console.log("点赞")
      this.setData({
        [like]: true,
        [likeNum]: likeNums + 1
      })
    } else {
      console.log("取消点赞")
      this.setData({
        [like]: false,
        [likeNum]: likeNums - 1
      })
    }
  },
  bindChooseSuggest(e) {
    wx.showModal({
      title: '抱歉',
      content: '考虑版权原因，我们准备超链接到原网页。但是非企业用户不允许跳转超链接，很抱歉此部分内容无法展示',
      cancelText: '返回',
      success:function(res){
        if(res.confirm){
          console.log('用户点击确定')
        }else if(res.cancel){
          console.log('用户点击取消')
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }
})