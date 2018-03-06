import React from 'react';

export class Resources extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      welcome: "Hi there, you're in Resources"
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.welcome}</h1>
      </div>
    )
  }
}

export default Resources;