import { Dispatcher } from 'flux'
import { INCREMENT }from './variable';
import store from './index'
const dispatcher = new Dispatcher()

// 注册dispatcher 
dispatcher.register(( action ) => {
  console.log(action)
  switch ( action.type ) {
    case INCREMENT:
      // 修改数据
      console.log(store)
      store.state.count ++ 
      break;
    default:
      break;
  }
})


export default dispatcher
