import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count : 0,
    likes:"likes"

  }
  addLike = () =>{
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
    if(this.state.count === 0){
      this.setState({
        likes:"like"
      })
    }else{
      this.setState({
        likes: "likes"
      })
    }
  }
  

  render() {
    return (
      <div className="App">
      <header className ="App-Header">
        <button onClick ={this.addLike}>👍 {this.state.count} {this.state.likes}</button>
      </header>
      </div>
    );
  }
}

export default App;
