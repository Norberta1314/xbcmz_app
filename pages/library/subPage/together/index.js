const app = getApp();

Page({
  data:{
    mybook:[
      {
        img:'../../../../images/library/advice/1.png',
        name:'人间失格',
        auther:'（日）太宰治'
      },{
        img:'../../../../images/library/advice/2.png',
        name:'活着',
        auther:'余华'
      },{
        img:'../../../../images/library/advice/3.png',
        name:'漫长的告别',
        auther:'雷蒙德钱德勒'
      }
    ]
  },
  onLoad:function(e) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  chooseBook(){
    wx.navigateTo({
      url: './subPage/chooseBook/index'
    })
  },
  chooseCap(){
    wx.navigateTo({
      url: './subPage/chooseCaptor/index'
    })
  },
  chooseFriend(){
    wx.navigateTo({
      url: './subPage/chooseFriend/index'
    })
  },
  submit(){

  }
})