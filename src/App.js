import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas.js';
import { O } from './tetronimos.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      board: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
      ],
      currentTetro: new O(),
    }
  }
  componentDidMount(){
    let currentTetro = new O();
    this.setState({currentTetro: currentTetro})
  }
  test = () => {
    let newArray =  this.state.board;
    newArray[0][0] = 1;
    this.setState({board: newArray})
  }
  render() {
    return (
      <div className="App">
        <Canvas board = {this.state.board} current = {this.state.currentTetro}/>
        <button onClick = {this.test}>Test</button>
      </div>
    );
  }
}

export default App;
