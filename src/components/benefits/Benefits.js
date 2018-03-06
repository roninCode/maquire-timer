import React from 'react';

export class Benefits extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      benefits: "Standing up wills save your life"
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.benefits}</h1>
      </div>
    )
  }
}

export default Benefits;