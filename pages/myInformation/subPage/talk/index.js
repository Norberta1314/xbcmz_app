const app = getApp();

Page({
  data: {
    tabList: ['社区', '推荐'],
    currentTab: 0,
    currentRecomment: 0,
    backgroundItem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    comments: '',
    name:''
  },
  onLoad(){
    let _this = this
    app.$store.setWxCtx(this, 'teachVideo')
    this.gettopics()
    this.setName()
  },
  setName() {
    let _this = this
    app.fetch({
      url: app.API('myInfo'),
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        _this.setData({
          name: result.name
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
        const result = res.data.data
        let results = []
        for (let i = 0; i < result.length; i++) {
          if (result[i].name === this.data.name) {
            results.push(result[i])
          }
        }
        results = results.reverse()
        _this.setData({
          comments: results
        })
      }
    })
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
  }
})