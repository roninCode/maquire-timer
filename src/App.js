import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import TimerWrapper from './components/timers/TimerWrapper.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <TimerWrapper />
      </div>
    );
  }
}

export default App;
