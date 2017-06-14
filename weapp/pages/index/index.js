
var app = getApp();
var r = require('./require.js');//引入js的方式
Page({
  data: {
    globalData:app.globalData.testData,
    test:'123'
  },
  buttonClik:function () {
    r.test.bind(this)();
    console.log(r.test1());
    console.log(app.commonTest());
    this.setData({
      globalData: app.commonTest()
    })
  }
})
