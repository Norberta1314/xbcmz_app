const app = getApp()
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    commentType: String,
    commentID: Number
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    inputData:''
  },
  methods: {
    // 这里是一个自定义方法


    bindInputTap(e) {
      this.setData({
        inputData: e.detail.value
      })
    },
    addComment(e) {
      let id = this.properties.commentID
      let commentType = this.properties.commentType
      if (commentType === 'community') {
        app.fetch({
          url: app.API('addCommunityComment') + id,
          method:'POST',
          data:{
            content: this.data.inputData
          },
          success:(res) => {
            let result = res.data.data
            this.setData({
              inputData:''
            })
          }
        })
      } else if (commentType === 'video') {
        app.fetch({
          url: app.API('addVideoComment') + id,
          method:'POST',
          data:{
            content: this.data.inputData
          },
          success:(res) => {
            let result = res.data.data
            this.setData({
              inputData:''
            })
          }
        })

      } else if (commentType === 'live') {
        app.fetch({
          url: app.API('addLiveComment') + id,
          method:'POST',
          data:{
            content: this.data.inputData
          },
          success:(res) => {
            let result = res.data.data
            this.setData({
              inputData:''
            })
          }
        })
      }
    }
  }
})