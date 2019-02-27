// components/addButtons/addButton.js
const app = getApp()

Component({
    properties: {

    },
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        changeHandle(e) {
            console.log(app.systemInfo)
            console.log(this.data.x, this.data.y)
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