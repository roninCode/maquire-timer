import React from 'react'

export class AppHeader extends React.Component{
  render(){
    return(
      <header className="App-header">
        <div className="App-header-content">
          <h1 className="App-header-left">Maquire</h1>
          <h1 className="App-header-right">Timer</h1>
          <img className="App-header-center" src={"https://pbs.twimg.com/profile_images/877143503452688384/tcGwgimP_400x400.jpg"} className="App-logo" alt="logo" />
        </div>
      </header>
    )
  }
}

export default AppHeader;