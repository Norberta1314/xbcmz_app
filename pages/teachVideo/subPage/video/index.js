const app = getApp();

Page({
  data:{
    tabList: ['简介', '评价'],
    currentTab: 0,
    info:{
      auther: 'zxz',
      name: '如何一学期重修两门视听说课程',
      info_text: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloremque nihil quam sequi. Architecto enim impedit laborum quibusdam quos similique tenetur totam unde vel veritatis? Est porro repellendus tenetur.',
      play: 4,
      commit: 30,
      date: '2019/3/1'
    },
    commitNum: 30,
    commits:[{
      head:'',
      auther:'zxz',
      info_text:'   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloremque nihil quam sequi. Architecto enim impedit laborum quibusdam quos similique tenetur totam unde vel veritatis? Est porro repellendus tenetur.'
    },{
      head:'',
      auther:'zxz',
      info_text:'   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloremque nihil quam sequi. Architecto enim impedit laborum quibusdam quos similique tenetur totam unde vel veritatis? Est porro repellendus tenetur.'
    },{
      head:'',
      auther:'zxz',
      info_text:'   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloremque nihil quam sequi. Architecto enim impedit laborum quibusdam quos similique tenetur totam unde vel veritatis? Est porro repellendus tenetur.'
    }]

  },
  onLoad(option) {
    console.log(option.id)
  },
  tabItemClick: function (e) {

    this.setData({
      currentTab: e.currentTarget.dataset.pos
    })
  }
})