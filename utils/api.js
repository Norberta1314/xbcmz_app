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
  communityTag:'community/tags',
  addLiveComment: 'live/reply/',
  addVideoComment: 'video/reply/',

  topics: 'community/topics',
  commentDetail: 'community/topic/',
  addCommunity: 'community/topic/create',
  addCommunityComment: 'community/topic/reply/',

  timeTable: 'user/stu/class/schedule',
  attendence:'user/stu/attendence',
  teacherSearch: 'user/teacher/search',
  grade:'user/stu/grade',
  examTable:'user/stu/exams',
  taskList:'user/stu/exams'
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