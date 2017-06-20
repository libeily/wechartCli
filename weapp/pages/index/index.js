var app = getApp();
var r = require('./require.js');//引入js的方式
import {html2json} from '../../utils/lib/html2wxml/html2wxml';
Page({
  data: {
    globalData:app.globalData.testData,
    test:'123',
    cutted_url:'',
    img:'',
    innerHTML: html2json('<div><p id ="1_1">test</p>').child
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
        // timeout(1000).then(function () {
        //   // that.cut()
        // });
        that.cut()
      }
    });

  },


  cut: function() {
    console.log('cut')
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      canvasId: 'myCanvas',
      success: function (res) {
        that.setData({
          cutted_url: res.tempFilePath
        })
      },
      fail: function(){
        console.log('fail')
      }
    })
  },
})

function timeout(ms) {
  return new Promise(function(resolve)  {
        setTimeout(resolve, ms);
})
}