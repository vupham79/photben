import React, { Component } from 'react';
import Header from './components/layout/Header';
import Group from './components/element/Group/group';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Group />
        <br />
        <Group />
      </div >
    );
  }
}

export default App;
