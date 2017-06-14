/**
 * Created by liyan on 2017/6/14.
 */
var test = function(){
  console.log('require---test')
}
var test1 = function(){
  console.log('require---test1')
} 

let exportObj ={
  test:test,
  test1:test1
}
module.exports = exportObj;