
var app = getApp();
var r = require('./require.js');//引入js的方式
Page({
  data: {
    globalData:app.globalData.testData
  },
  buttonClik:function () {
    console.log(r.test());
    console.log(r.test1());
    console.log(app.commonTest());
    this.setData({
      globalData: app.commonTest()
    })
  }
})
