//app.js
// const r=require('./utils/request/r.js');
const objectAssign=require('./utils/lib/deep-assign');
// const config=require('./config.js');


App({
  commonTest:function(){
    console.log('全局的test函数被调用')
    return '点击后全局状态'
  },
  globalData:{
    testData:'我是来自全局变量的'
  },
  objectAssign:objectAssign,
});