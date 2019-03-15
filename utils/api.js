const serverUrl = 'https://xbcmz.zhutianyu.top/'

const systemInfo = wx.getSystemInfoSync()
const isDev = systemInfo.platform === 'devtools'

const apiMap = {
  autoLogin: 'auth/autologin',
  login: 'auth/bind/wx',

  myInfo: 'user/stu/info/detail',

  videoON: 'video/on/demand/videos',
  live: 'video/live/videos',
  videoDetail: 'video/on/demand/',
  liveDetail: 'video/live/',

  topics: 'community/topics',
  commentDetail: 'community/topic/',
  addCommunity: 'community/topic/create',

  timeTable: 'user/stu/class/schedule',
  attendence:'user/stu/attendence',
  teacherSearch: 'user/teacher/search/'
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