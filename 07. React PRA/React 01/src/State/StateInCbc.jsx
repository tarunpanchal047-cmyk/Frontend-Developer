import {Component} from 'react'

export default class StateInCbc extends Component {
    state = {
        count : 0
    }
handleIncrement = ()=>{
    console.log("function is called")
    this.setState({count : this.state.count + 1})
}



render(){
  return (
    <>
      <h1>StateInCbc : {this.state.count} </h1>
      <button onClick={this.handleIncrement}>Increment</button>
    </>
  )
}
}

