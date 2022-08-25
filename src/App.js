import React, { Component } from 'react'
import './common.css'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list:[
        {
          id:1,
          img: require("./assets/indexListImg1.png"),
          flag: false
        },
        {
          id:2,
          img: require("./assets/indexListImg2.png"),
          flag: false
        }
      ]
    }
  }
  enter = (e,index)=>{
    console.log(index)
    e.preventDefault();
    let list = [...this.state.list]
    list[index].flag = true
    this.setState({
      list
    })
  }
  leave = (e,index)=>{
    e.preventDefault();
    let list = [...this.state.list]
    list[index].flag = false
    this.setState({
      list
    })
  }
  render() {
    let { list } = this.state;
    return (
      <div>
        <ul>
         {
          list.map((item,index)=>{
            return (
              <li key={index} onMouseEnter={(e)=>this.enter(e,index)} onMouseLeave={(e)=>this.leave(e,index)} >
                <img src={item.img} />
                <span style={{ 'display': item.flag ? 'block' :'none' }}>1212</span>
              </li>
              )
          })
         }
        </ul>
      </div>
    )
  }
}

