const app = getApp();
Page({
    data: {
        listData:[
            {"state":"已评","course_name":"工程经济学","course_type":"专业限选","teacher":"杨过"},
            {"state":"已评","course_name":"计算机动画","course_type":"专业必修","teacher":"郭靖"},
            {"state":"已评","course_name":"高等数学","course_type":"大类必修","teacher":"黄蓉"},
            {"state":"已评","course_name":"大学英语","course_type":"大类必修","teacher":"李立"},
            {"state":"未评","course_name":"离散数学","course_type":"专业必修","teacher":"王丽"},
            {"state":"未评","course_name":"java程序设计","course_type":"专业限选","teacher":"杨修"},
            {"state":"未评","course_name":"绘画基础","course_type":"专业限选","teacher":"程荣"}
        ]
    },
    onLoad: function (options) {
        var _this = this
        _this.getTeacher()
        _this.showModal()
    },
    showModal() {
        wx.showModal({
            title: '提示',
            content: '当前不是评教时间',
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
    },
    getTeacher() {
        let _this = this
        app.fetch({
            url:app.API('timeTable'),
            method:'GET',
            success:(res) => {
                let results = res.data.data
                this.setData({
                    listData: results
                })
            }
        })
    }
})
