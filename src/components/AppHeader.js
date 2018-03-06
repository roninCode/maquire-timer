import React from 'react'

export class AppHeader extends React.Component{
  render(){
    return(
      <header className="App-header">
        <div className="App-header-content">
          <h1 className="App-header-left">Maquire</h1>
          <h1 className="App-header-right">Timer</h1>
        </div>
        <div className="App-logo-container">
          <img src={require("../Images/bicepCircle.jpg")} alt="logo" />
        </div>
      </header>
    )
  }
}

export default AppHeader;