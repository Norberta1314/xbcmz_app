const app = getApp();

Page({
  data: {
    SSID: '',
    password: '',
  },
  bindSSIDInput(e) {
    this.setData({
      SSID: e.detail.value
    })
  },
  bindPWInput(e) {
    this.setData({
      password: e.detail.value
    })
  },
  bindConnectWifi() {

    let _this = this
    wx.startWifi({
      success(res){
        console.log(res)

        wx.connectWifi({
          SSID: _this.data.SSID,
          password: _this.data.password,
          success(res) {
            console.log("wifi连接成功！")
            console.log(res.errMsg)
          },
          fail(res) {

            console.log("wifi连接失败")
            console.log(res)
            wx.showModal({
              title: '提示',
              content: '抱歉当前系统不支持wifi连接接口，请升级手机系统',
              cancelText: '返回',
              success:function(res){
                if(res.confirm){

                }else if(res.cancel){

                  wx.navigateBack({
                    delta: 1
                  })
                }
              }
            })
          },
          complete(res) {
            wx.stopWifi({
              success(res) {
                console.log("关闭wifi")
              }
            })
          }
        })
      }
    })
  },
  bindConnectBooth() {
    let _this = this

    wx.showModal({
      title: '抱歉...',
      content: '无指定蓝牙设备',
      cancelText: '返回',
      success:function(res){
        if(res.confirm){

        }else if(res.cancel){

          wx.navigateBack({
            delta: 1
          })
        }
      }
    })


    wx.openBluetoothAdapter({
      success(res) {
        console.log("初始化蓝牙模块成功")

        setTimeout(() => {
          wx.startBluetoothDevicesDiscovery({
            success(res) {
              console.log("开始发现蓝牙设备成功")
              setTimeout(() => {
                wx.getBluetoothDevices({
                  success(res) {
                    console.log(res)
                    console.log("get蓝牙设备成功")
                  },
                  fail(res) {
                    console.log("get蓝牙设备失败")
                    console.log(res)
                  }
                })
              })

            },
            fail(res) {
              console.log("开始发现蓝牙设备失败")
              console.log(res)
            }
          })
        }, 1000)

      },
      fail(res) {
        console.log("初始化蓝牙模块失败")
        console.log(res)
      },
      complete(res) {
        setTimeout(()=>{
          wx.closeBluetoothAdapter({
            success(res) {
              console.log("关闭蓝牙")
            }
          })
        }, 3000)

      }

    })


  }

})