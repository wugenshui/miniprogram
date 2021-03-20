// app.js
App({
  onLaunch(options) {
    console.log('App onLaunch', options)
  },
  onShow(options) {
    console.log('App onShow', options)

    // 获取登录信息
    wx.login({
      success: res => {
        console.log('wx.login', res)
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxafe41a0c57db9a87&secret=91609e88544171a8f19bc590f8596338&js_code=' + res.code + '&grant_type=authorization_code',
            success: res => {
              console.log('jscode2session', res)
              wx.setStorageSync('openid', res.data.openid)
              wx.setStorageSync('session_key', res.data.session_key)
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})