const serverUrl = "https://xbcmz.zhutianyu.top/"

const systemInfo = wx.getSystemInfoSync()
const isDev = systemInfo.platform === 'devtools'

const apiMap = {
    autoLogin: 'auth/autologin',
    login: 'auth/bind/wx',
    myInfo: 'user/stu/info/detail',
    timeTable: 'user/stu/class/schedule',
    videoON: 'video/on/demand/videos',
    live: 'video/live/videos'
}

/**
 *
 * @param key
 * @return {string}
 * @constructor
 */
function API(key) {
    const domain = serverUrl
    const url = serverUrl + apiMap[key]
    return url
}

export default API