const app = getApp();

Page({
  data: {
    secret:[{
      text:'明天就要考试了我好紧张啊！',
      like: 4,
      like_I: 0

    },{
      text:'马上要回家见父母了嘤嘤嘤',
      like: 4,
      like_I: 1
    },{
      text:'这两天在下雪，好担心飞机会被取消啊，哭唧唧',
      like: 4,
      like_I: 0
    }]
  },
  onLoad(){
    this.onLoadding()
  },
  onLoadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  likeClick: function (e) {
    var index = e.currentTarget.dataset.pos

    var like = 'secret[' + index + '].like_I'
    var likeNum = 'secret[' + index + '].like'
    var likeNums = this.data.secret[index].like;

    if ( this.data.secret[index].like_I === 0 ) {
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