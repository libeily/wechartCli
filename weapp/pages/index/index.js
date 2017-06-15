var app = getApp();
var r = require('./require.js');//引入js的方式
Page({
  data: {
    globalData:app.globalData.testData,
    test:'123',
    cutted_url:''
  },
  buttonClik:function () {
    // r.test.bind(this)();
    // console.log(r.test1());
    // console.log(app.commonTest());
    // this.setData({
    //   globalData: app.commonTest()
    // })
    var that = this;
    const ctx = wx.createCanvasContext('myCanvas');
    wx.chooseImage({
      success: function(res){
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 300, 300)
        ctx.draw();
        that.cut()
      }
    })
  },

  cut: function() {
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      canvasId: 'myCanvas',
      success: function (res) {
        that.setData({
          cutted_url: res.tempFilePath
        })
      }
    })
  },
})