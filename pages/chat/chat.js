Page({

  /**
   * Page initial data
   */
  data: {
    msgList: [],
    inputValue: '',
    showChat: false,
    isLoading: false,
    scrollTop: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // If needed, check options for state restoration
  },

  /**
   * Handle input change
   */
  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  /**
   * Handle Search from Landing Page
   */
  onSearchConfirm(e) {
    const value = e.detail.value;
    if (!value.trim()) return;

    this.setData({
      showChat: true,
      inputValue: ''
    });

    this.addUserMessage(value);
    this.handleReply(value);
  },

  /**
   * Handle Send from Chat View
   */
  onSend() {
    const value = this.data.inputValue;
    if (!value.trim()) return;

    this.addUserMessage(value);
    this.setData({ inputValue: '' });
    this.handleReply(value);
  },

  /**
   * Add User Message to List
   */
  addUserMessage(text) {
    const msg = {
      type: 'user',
      content: text
    };
    
    const list = this.data.msgList;
    list.push(msg);

    this.setData({
      msgList: list,
      scrollTop: list.length * 1000 // Scroll to bottom
    });
  },

  /**
   * Handle Logic & Reply
   */
  handleReply(input) {
    this.setData({ isLoading: true });
    
    // Scroll to bottom to show loading
    this.setData({ scrollTop: (this.data.msgList.length + 1) * 1000 });

    setTimeout(() => {
      const response = this.mockAgentResponse(input);
      
      const list = this.data.msgList;
      
      // Construct message object based on response template
      const msg = {
        type: 'assistant',
        template: response.template,
        data: response.data
      };

      list.push(msg);

      this.setData({
        isLoading: false,
        msgList: list,
        scrollTop: (list.length + 1) * 1000
      });

    }, 1500);
  },

  /**
   * Mock Agent Response Logic
   */
  mockAgentResponse(userInput) {
    if (userInput.includes("1") || userInput.includes("取件")) {
      return {
        status: "success",
        template: "normal",
        data: {
          pickupCode: "8-2-3011",
          statusText: "正常取件",
          stationName: "北门菜鸟驿站",
          mapImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcJLbuntMe7u8qtIB_M1T2HTRlwPGW18vXa7Q-NO9zCdO3p6Fd2WdkBWlK63j7LdXsEW-4c6697xdzGCOYnzkE5D4gRfZ6oHDNQ4B8G43tOIGRa71_hG76h4Umosthc-pFB8mirGl2JIOjIKnOw3UnJvlCkBvFKnZBGKBorCW6GBjcx5-ONsgZCYn7ttx3TjjvlMBhi8FxTUYXz0VgY0wUxYjfBxiiJspKbYRdNvJ67kiQaKfu7VmsWJMU5vqYgLf64xZluBAwosM",
          detailUrl: "detail_normal"
        }
      };
    } else if (userInput.includes("2") || userInput.includes("关门")) {
      return {
        status: "success",
        template: "closed",
        data: {
          pickupCode: "8-2-3011",
          statusText: "驿站已关门",
          stationName: "北门菜鸟驿站",
          mapImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcJLbuntMe7u8qtIB_M1T2HTRlwPGW18vXa7Q-NO9zCdO3p6Fd2WdkBWlK63j7LdXsEW-4c6697xdzGCOYnzkE5D4gRfZ6oHDNQ4B8G43tOIGRa71_hG76h4Umosthc-pFB8mirGl2JIOjIKnOw3UnJvlCkBvFKnZBGKBorCW6GBjcx5-ONsgZCYn7ttx3TjjvlMBhi8FxTUYXz0VgY0wUxYjfBxiiJspKbYRdNvJ67kiQaKfu7VmsWJMU5vqYgLf64xZluBAwosM",
          detailUrl: "detail_closed"
        }
      };
    } else {
      return {
        status: "error",
        template: "error",
        data: {}
      };
    }
  },

  /**
   * Handle Card Tap
   */
  onCardTap(e) {
    // 1. 获取 WXML 里绑定的数据
    const code = e.currentTarget.dataset.code;
    const status = e.currentTarget.dataset.status;
    const type = e.currentTarget.dataset.type;

    // 2. 真正的跳转！(把数据拼在 URL 后面)
    wx.navigateTo({
      url: `/pages/detail/detail?code=${code}&status=${status}&type=${type}`
    });
  },

  /**
   * === 新增: 点击历史记录 ===
   */
  onTapHistory() {
    wx.showToast({
      title: '历史记录功能待开发',
      icon: 'none'
    });
  },

  /**
   * === 新增: 点击个人中心 ===
   */
  onTapProfile() {
    wx.showToast({
      title: '个人中心功能待开发',
      icon: 'none'
    });
  }
})

