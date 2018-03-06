import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TimerWrapper from './components/timers/TimerWrapper';
import Laugh from './components/laugh/Laugh';
import Resources from './components/resources/Resources'
import Benefits from './components/benefits/Benefits'
import Nav from './components/Nav';

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
          <Switch>
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
                <h1>Pop quiz hot-shot!</h1>
                <h3>Do you know where you're going?</h3>
                </div>

            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
