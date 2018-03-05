import React from 'react';

export class Exercise extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      exercises: ["30 pushups", "35 squates", "50 jumping jacks", "30 calf raises", "10 burpees...oh no!!!", "walk around the room for 2 mintues....Go OUTSIDE! if it\'s nice out!"],
      selectedExercise: null,
    }
    this.getRandomExercise = this.getRandomExercise.bind(this);
  }

  componentDidMount(){
    this.getRandomExercise();
  }

  getRandomExercise(){
    const exercises = this.state.exercises;
    const randomNumber = Math.floor(Math.random() * exercises.length);
    this.setState({
      selectedExercise: exercises[randomNumber],
    })
  }

  render(){
    return(
      <div>
        <h1>Do your exercise now!</h1>
        <h2>And your exercise is: {this.state.selectedExercise}</h2>
      </div>
    )
  }
}

export default Exercise;