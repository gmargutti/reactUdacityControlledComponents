import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: 'Something should be typed' 
  }

mirrorText = (txt) => {
 this.setState((prevState) => ({ text: txt })) 
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" onChange={(element) => this.mirrorText(element.target.value)} />
          <p className="echo">Echo:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
