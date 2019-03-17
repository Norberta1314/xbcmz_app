// components/addButtons/addButton.js
const app = getApp()

Component({
  properties: {},
  data: {
    x: 0,
    y: 0,
    isMove: false,
    menuShow: false,
    noteShow: false,
    initalTouchX: 0,
    initalTouchY: 0,
    currentTouchX: 0,
    currentTouchY: 0,
    transform: '',
    noteVal:''
  },
  methods: {
    changeHandle(e) {
      console.log(app.systemInfo)
      console.log(this.data.x, this.data.y)
    },
    touchStartHandle(e) {


    },
    touchMoveHandle(e) {
      console.log(e)
      if ( this.data.isMove ) {
        const tempTransform = `translateX(${ e.touches[0].pageX - this.data.initalTouchX }px) translateY(${ e.touches[0].pageY - this.data.initalTouchY }px)`
        this.setData({
          transform: tempTransform
        })
      }

    },
    touchEndHandle(e) {
      // this.setData({
      //     isMove: false
      // })
    },
    tapHandle(e) {
      console.log(e)
      this.setData({
        menuShow: !this.data.menuShow
      })

    },
    longPressHandle(e) {
      console.log(e)
      if ( this.data.isMove ) {
        return
      }
      this.setData({
        isMove: true,
        initalTouchX: e.touches[0].pageX,
        initalTouchY: e.touches[0].pageY,
      })
    },
    tapHandleNew: function (e) {
      wx.navigateTo({
        url: '/pages/community/subPage/addCommunity/index',
      })
    },
    tapHandleNote: function (e) {
      this.setData({
        noteShow: !this.data.noteShow
      })
    },
    inputHandle: function (e) {
      this.setData({
        noteVal: e.detail.value
      })
      console.log(this.data.noteVal)
    }

  },

  pageLifetimes: {
    show() {
      this.setData({
        x: app.systemInfo.screenWidth - 50,
        y: app.systemInfo.screenHeight - 180
      })
    }
  }
})