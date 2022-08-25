/* 
  1. 我们现在要创建 store,但是store有两个功能
      1.1 存储数据
      1.2 数据改变，视图才能更新 【 事件的发布和订阅来完成 】
*/

const events = require( 'events' )

const EventEmitter = events.EventEmitter 

// console.log( EventEmitter.prototype )


const store = {
  ...EventEmitter.prototype, // 浅拷贝 数据的更新，视图更新
  state: { // 数据存储
    count: 20
  },
  getState () {
    return this.state.count     // 获取数据的方法
  }
}

export default store


// // 事件的发布

// store.on('aa',function () {
//   console.log('aa')
// })

// // 事件的订阅

// store.emit('aa')

