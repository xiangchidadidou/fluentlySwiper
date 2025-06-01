// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      username: "",
      password: "",
    },
    isLoggedIn: false
  },

  /**
   * 用户名输入
   */
  handleUsernameInput(e) {
    this.setData({
      'user.username': e.detail.value
    });
  },

  /**
   * 密码输入
   */
  handlePasswordInput(e) {
    this.setData({
      'user.password': e.detail.value
    });
  },

  
  /**
   * 视频相关事件处理
   */
  handleVideoError(e) {
    console.error('视频加载错误：请打开请启动server启动本地服务器', e.detail);
    wx.showToast({
      title: '请启动server',
      icon: 'error'
    });
  },

  handleVideoPlay() {
    console.log('视频开始播放');
  },

  handleVideoPause() {
    console.log('视频暂停播放');
  },

  handleFullscreenChange(e) {
    console.log('全屏状态改变：', e.detail.fullScreen);
  },

  /**
   * 登录
   */
  handleLogin() {
    const { username, password } = this.data.user;
    console.log("登录信息 - 用户名:", username, "密码:", password);
    if (username === "24055060115" && password === "24055060115") {
      wx.setStorageSync('isLoggedIn', true);
      this.setData({ isLoggedIn: true });
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000 // 持续时间
      });
      setTimeout(() => {
        wx.switchTab({// 跳转到指定页面
          url: '/pages/index/index'
        });
      }, 1000);
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'error'
      });
    }
  },

  /**
   * 退出登录
   */
  handleLogout() {
    wx.removeStorageSync('isLoggedIn');
    this.setData({ isLoggedIn: false });
    wx.showToast({
      title: '退出成功',
      icon: 'success',
      duration: 1000 // 持续时间
    });
    setTimeout(() => {
      wx.switchTab({// 跳转到指定页面
        url: '/pages/my/my'
      });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const isLoggedIn = wx.getStorageSync('isLoggedIn') || false;
    this.setData({ isLoggedIn });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})