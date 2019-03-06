const app = getApp();

Page({
  data:{
    tabList: ['简介', '评价'],
    currentTab: 0,
    info:{
      id:'xxx',
      video_url:'',
      author: 'zxz',
      title: '如何一学期重修两门视听说课程',
      des: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloremque nihil quam sequi. Architecto enim impedit laborum quibusdam quos similique tenetur totam unde vel veritatis? Est porro repellendus tenetur.',
      play_size: 4,
      comment_size: 30,
      create_time: '2019/3/1',
      comments:[{
        id:'xxx',
        name:'xxx',
        content:'xxx',
        createTime:'xxx'
      }]
    },
  },
  onLoad(option) {
    let _this = this
    app.$store.setWxCtx(this, 'videoDemand')
    _this.getVideoDetail(option.id)

  },
  getVideoDetail:function(id){
    let _this = this
    app.fetch({
      url:app.API('videoDetail' ) + id,
      method: 'GET',
      success: (res) => {
        const result = res.data.data
        let date = result.create_time.slice(0, 10)
        _this.setData({
          info:result,
          'info.create_time' : date,
        })


        console.log(date)
      }
    })
  },
  tabItemClick: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.pos
    })
  }
})