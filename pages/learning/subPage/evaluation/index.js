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
    onLoad: function () {
        console.log('onLoad')
    }

})
