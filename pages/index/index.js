// index.js
Page({
  onLoad() {
    this.checkLoginStatus();
  },

  onShow() {
    this.checkLoginStatus();
  },

  /**
   * 检查用户是否已登录
   * 如果未登录，显示提示框并跳转到登录页面
   * 
   * getStorageSync() 方法用于获取本地缓存中的指定 key 的值
   * wx.switchTab() 方法用于跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * wx.showToast() 方法用于显示消息提示框
   */
  checkLoginStatus() {
    const isLoggedIn = wx.getStorageSync('isLoggedIn') || false;
    if (!isLoggedIn) {
      wx.showToast({// 显示提示框
        title: '请先登录',
        icon: 'error',
        duration: 1000 // 持续时间
      });
      setTimeout(() => {
        wx.switchTab({// 跳转到指定页面
          url: '/pages/my/my'
        });
      }, 1000);
    }
  }
})
