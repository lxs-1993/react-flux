# flux
1: Flux组成部分
```javascript
 View：视图层(用react组件来代替)
 ActionCreators: 动作创造者 视图层发出的消息
 Dispatcher(派发器)：用来接收Actions 执行回调函数
 Store(数据层): 用来存放应用状态,一旦发生变动，就提醒Views要更新页面
```
2: Flux的工作流程
```javascript
  组件获取到store中保存的数据挂载在自己的状态上 用户产生了操作，调用actions的方法
  actions接收到了用户的操作，进行一系列的逻辑代码、异步操作
  然后actions会创建出对应的action，action带有标识性的属性
  actions调用dispatcher的dispatch方法将action传递给dispatcher
  dispatcher接收到action并根据标识信息判断之后，调用store的更改数据的方法
  store的方法被调用后，更改状态，并触发自己的某一个事件
  store更改状态后事件被触发，该事件的处理程序会通知view去获取最新的数据
```
3: Store的两个功能
```javascript
  1: 存储数据
  2: 数据改变，视图才能更新(事件的发布和订阅来完成)
```