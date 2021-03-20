module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String,
      value: '默认值'
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    behaviorInfo: function(){
      wx.showToast({
        title: '提示:' + this.data.myBehaviorProperty,
      })
    }
  }
})