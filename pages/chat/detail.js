Page({
  data: {
    code: '',
    status: '',
    type: 'normal'
  },

  onLoad(options) {
    // 核心：接收 chat 页面传过来的参数
    if (options.code) {
      this.setData({
        code: options.code,
        status: options.status || 'Ready',
        type: options.type || 'normal'
      });
    }
  },

  goBack() {
    wx.navigateBack();
  }
})