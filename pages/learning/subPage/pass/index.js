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
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
      '青蛙除了用肺呼吸还用什么呼吸？',
    ],
    answers: [
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮'],
      ['A.肌肤', 'B.皮肤', 'C.肝脏', 'D.腮']
    ],
    list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    grade: 0,
    showScore: false
  },

  chooseAnswer: function (e) {
    let currentQuestion = this.data.currentQuestion

    let chooseAnswer = e.currentTarget.dataset.pos
    let up = 'list[' + currentQuestion + ']'
    if ( chooseAnswer === 0 ) {
      this.setData({
        [up]: 2,
        grade: this.data.grade + 10
      })
    } else {
      this.setData({
        [up]: 1
      })
    }

    if(currentQuestion === 9) {
      this.setData({
        showScore: true
      })
    } else {
      this.setData({
        currentQuestion: currentQuestion + 1
      })
    }
  }
})