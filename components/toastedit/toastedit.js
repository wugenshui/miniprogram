Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },
  properties: {
    toastText: { // 属性名  
      type: String,
      value: '内容'
    }
  },
  data: {
    toastShow: false,
  },
  methods: {
    showToast(text, time) {
      this.setData({
        toastShow: !this.data.toastShow,
        toastText: text
      })
      var that = this
      if (!time) {
        time = 8000
      }
      setTimeout(function () {
        that.setData({
          toastShow: !that.data.toastShow
        })
      }, time)
    }
  }
})