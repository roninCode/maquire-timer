import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Nav from './components/Nav';
import TimerWrapper from './components/timers/TimerWrapper';
import Laugh from './components/laugh/Laugh';
import Resources from './components/resources/Resources'
import Benefits from './components/benefits/Benefits'

var ReactRouter =  require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Nav />
          <Switch className="main-component">
            <Route exact path="/" component={TimerWrapper}>            
            </Route>
            <Route path="/laugh" component={Laugh}>            
            </Route>
            <Route path="/coding_resources" component={Resources}>            
            </Route>
            <Route path="/stand_up" component={Benefits}>          
            </Route>
            <Route render={ function(){
              return <div>
                <h3>Do you know where you're going?</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RfiQYRn7fBg?autoplay=1&loop=1&rel=0&amp&showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3>...these are not the drones you are looking for...</h3>
                </div>
            }} />
          </Switch>
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default App;
