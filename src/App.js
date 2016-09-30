import React, { Component } from 'react';
import CommentList from './CommentList.js';
import './App.css';
import CommentNew from './CommentNew';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:1
    }
  }
  handleClick(){
    this.setState({value:this.state.value+1});
  }
  render() {
    return (
      <div className="App">
        <div className="top">
          <div className="title">
            这是title
          </div>
          <div>{this.state.value}</div>
          <div><button onClick={this.handleClick.bind(this)}>点击</button></div>
        </div>
        <div className="frame_left">
          <CommentList />
        </div>
        <div className="frame_right">
          <CommentNew/>
        </div>
      </div>
    );
  }
}

export default App;