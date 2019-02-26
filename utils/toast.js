export default function toast(obj) {
    if (obj.icon === 'error') {
        obj.image = ''
    }
    wx.showToast(obj)
}