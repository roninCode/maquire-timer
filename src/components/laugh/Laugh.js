import React from 'react';

export class Laugh extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      defaultJoke: "I'm a joke!"
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.defaultJoke}</h1>
      </div>
    )
  }

}

export default Laugh;