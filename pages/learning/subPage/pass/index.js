const app = getApp();

Page({
  data: {
    currentQuestion: 0,
    iconimg: [
      ['none/0.png', 'false/0.png', 'true/0.png'],
      ['none/1.png', 'false/1.png', 'true/1.png'],
      ['none/2.png', 'false/2.png', 'true/2.png'],
      ['none/3.png', 'false/3.png', 'true/3.png'],
      ['none/4.png', 'false/4.png', 'true/4.png'],
      ['none/5.png', 'false/5.png', 'true/5.png'],
      ['none/6.png', 'false/6.png', 'true/6.png'],
      ['none/7.png', 'false/7.png', 'true/7.png'],
      ['none/8.png', 'false/8.png', 'true/8.png'],
      ['none/9.png', 'false/9.png', 'true/9.png']
    ],
    question: [
      '青蛙除了用肺呼吸还用什么呼吸：',
      '体育运动篮球最早起源于',
      '奥运会旗是:"五色环"旗,其中黄色环代表',
      '"打蛇打七寸"的七寸是指',
      '豆寇年华”是指几岁',
      '人们常说：无事不登三宝殿”你知道三宝”是指哪三宝',
      '下列哪部作品不属于杜甫的三别',
      '俄罗斯的那一条河流经圣彼得堡',
      '树干为什么常常刷成白色',
      '目前人类已知的最软的石头是什么',
    ],
    answers: [
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.美国', 'B.中国', 'C.英国', 'D.法国'],
      ['A.亚洲', 'B.欧洲', 'C.非洲', 'D.大洋洲'],
      ['A.咽喉', 'B.心脏', 'C.头部', 'D.尾巴'],
      ['A.13岁', 'B.14岁', 'C.15岁', 'D.16岁'],
      ['A.纸、砚、笔 ', 'B.书、剑、琴', 'C.佛、法、僧 ', 'D.金、银、玉'],
      ['A.《新婚别》', 'B.《垂老别》', 'C.《无家别》', 'D.《生死别》'],
      ['A.伏尔加河', 'B.多瑙河 ', 'C.涅瓦河 ', 'D.叶琳娜河'],
      ['A.防火', 'B.灭菌', 'C.防牲畜啃食', 'D.保暖'],
      ['A.磷灰石', 'B.方解石', 'C.滑石', 'D.石灰岩']
    ],
    list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    answerList: [1, 0, 0, 1, 0, 2, 3, 2, 1, 2],
    grade: 0,
    showScore: false,
    showColor: [[false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],]
  },
  onLoad() {
    this.loadding()
  },
  loadding() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 800)
  },
  chooseAnswer: function (e) {
    let _this = this
    let currentQuestion = this.data.currentQuestion

    let chooseAnswer = e.currentTarget.dataset.pos
    let up = 'list[' + currentQuestion + ']'
    if ( chooseAnswer === this.data.answerList[currentQuestion] ) {
      this.setData({
        [up]: 2,
        grade: this.data.grade + 10
      })
    } else {
      this.setData({
        [up]: 1
      })
    }

    if ( currentQuestion === 9 ) {
      this.setData({
        showScore: true
      })
    } else {
      let up = 'showColor[' + currentQuestion + '][' + chooseAnswer + ']'
      this.setData({
        [up]: true,
      })

      setTimeout(function () {
        _this.setData({
          currentQuestion: currentQuestion + 1
        })
      }, 1000)

    }
  }
})