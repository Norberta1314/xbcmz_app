const app = getApp();

Page({
  data: {
    tabList: ['社区', '推荐'],
    recommentItem: ['热门', 'java', '高等数学', '概率论与数理统计', 'python', '微观经济学', '大学物理'],
    currentTab: 0,
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    comments: [{
      name: 'zxz',
      question: '我为什么还没有女朋友？',
      commentNum: 10,
      likeNum: 3,
      like_I: 0
    }, {
      name: 'Lyren',
      question: 'zxz为什么还没有女朋友？',
      commentNum: 20,
      likeNum: 3,
      like_I: 1
    }, {
      name: 'hky',
      question: 'zxz为什么还没有女朋友？',
      commentNum: 20,
      likeNum: 3,
      like_I: 1
    }, {
      name: 'yyd',
      question: 'zxz为什么还没有女朋友？',
      commentNum: 20,
      likeNum: 3,
      like_I: 1
    }, {
      name: 'norberta',
      question: 'zxz为什么还没有女朋友？',
      commentNum: 20,
      likeNum: 3,
      like_I: 1
    }]
  },
  onLoad(){
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    this.gettopics()
  },
  gettopics(){
    let _this = this
    app.fetch({
      url:app.API('topics'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          comments: result
        })
      }
    })

    console.log(this.data.comments)
  },
  tapHandleComment: function(e) {
    const id = e.currentTarget.dataset.id
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

    if ( this.data.comments[index].stared === 0 ) {
      this.setData({
        [like]: 1,
        [likeNum]: likeNums + 1
      })
    } else {
      this.setData({
        [like]: 0,
        [likeNum]: likeNums - 1
      })
    }
  }
})