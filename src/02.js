
import React ,{ Component} from 'react';
import store from './store/index';
import actionsCreators from './store/actionCreators';

class Home extends Component {

   constructor(){
      super()
      this.state={
         count:store.getState()
      }
   }

   increment=() =>{
      actionsCreators.increment()
      store.emit('add');
   }

   componentDidMount(){
      store.on('add',()=>{
         this.setState({
            count:store.getState(),
         })
      })
   }
   componentWillUnmount() {
    store.off('add',()=>{})
   }
   render(){
      return(
         <div>
            <h3>flux</h3>
            <button onClick= {this.increment} >增加</button>
            <p> {this.state.count} </p>
         </div>
      )
   }
}
export default Home;
