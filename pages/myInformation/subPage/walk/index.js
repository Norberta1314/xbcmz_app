const app = getApp();

Page({
  data: {
    suggestItem:[{
      id:0,
      title: '【读美句】泰戈尔：不要着急，最好的总会在最不经意的时候出现',
      info:'拉宾德拉纳特·泰戈尔（1861年—1941年），印度诗人、文学家、社会活动家、哲学家和印度民族主义者。代表作有《吉檀迦利》、《飞鸟集》、《眼中沙...',
      form:'简书',
      src:'https://www.jianshu.com/p/ca89259b3050'
    }, {
      id:1,
      title: 'Java面试题火了：这可能是历史上最简单的一道面试题了',
      info:'来自：知乎 这可能是历史上最简单的一道Java面试题了。 题目很简单，完成代码，判断一个整数是否是奇数： p...',
      form:'CSDN',
      src:'https://blog.csdn.net/rx3oyuyi/article/details/88680928'
    }, {
      id:2,
      title: '那些一眼看穿人生真相的句子',
      info:'人生很复杂，也很简单 需要追寻，也在身边 需要我们用智慧直面 1 事不能拖，话不能多，人不能作 （及时、分寸、自制） 2 真正的坚韧—— 哭的时...',
      form:'简书',
      src:'https://www.jianshu.com/p/531089f5e1bf'
    }, {
      id:3,
      title: 'Why is my MiitreId Spring Boot authentication returning anonymousUser?',
      info:'I have adapted the code from here to call a MitreID OIDC server.In my controller:',
      form:'stackoverflow',
      src:'https://stackoverflow.com/questions/55264962/why-is-my-miitreid-spring-boot-authentication-returning-anonymoususer'
    }, {
      id:4,
      title: 'Vue 服务端渲染实践 ——Web应用首屏耗时最优化方案',
      info:'随着各大前端框架的诞生和演变，SPA开始流行，单页面应用的优势在于可以不重新加载整个页面的情况下，通过ajax和服务器通信，实现整个Web应用拒不更新，带来了极致的用户体验。然而，对于需要SEO、追求极致的首屏...',
      form:'segmentfault',
      src:'https://segmentfault.com/a/1190000018577041'
    }]
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