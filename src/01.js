import React ,{ Component} from 'react';
import store from './store/index';

class Home extends Component {

   constructor(){
      super()
      this.state={
         count:store.getState()
      }
   }
   componentDidMount() {
    console.log("store",store.getState())
   }

   render(){
      return(
         <div>
            <h3>flux</h3>
            <p> {this.state.count} </p>
         </div>
      )
   }
}
export default Home;
