import { INCREMENT }from './variable';
import dispatcher from './dispatcher';

const actionsCreators = {
   increment(){
      //创建动作
      let actions ={
         type:INCREMENT
      }
      dispatcher.dispatch(actions)
   }
}

export default actionsCreators;