import React from 'react'
import Timer from './Timer'
import Exercise from '../activities/Exercise'
import MusicPlayer from '../activities/MusicPlayer'
import GetQuote from '../../utils/GetQuote'

export class TimerWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timeToWork: true,
      seconds: 1200,
    }
    this.handleWorkTimerCompleted = this.handleWorkTimerCompleted.bind(this);
    this.handleExerciseCompleted = this.handleExerciseCompleted.bind(this);
  }

  handleWorkTimerCompleted(){
    this.setState({
      timeToWork: false,
      seconds: 1200,
    })
  }

  handleExerciseCompleted(){
    this.setState({
      timeToWork: true,
    })
  }

  render(){
    if(this.state.timeToWork){ 
      return(
        <div>
          <h1>Alright, back to work!</h1>
          <img className="top-margin" src="https://s.aolcdn.com/hss/storage/midas/76bfb605bf27ca9945a59f8a00655b8/204688835/Jerry_INTRO.jpg" alt="Jerry Maquire"/>
          <Timer seconds={this.state.seconds} onTimerCompleted={this.handleWorkTimerCompleted} />
          <GetQuote className="quote" />
        </div>
      )
    }
    else {
      return(
        <div>
          <MusicPlayer />
          <Exercise />
          <button onClick={this.handleExerciseCompleted}>Go back to work now</button>
          <p>You better'v done your exercise!</p>
          <video className="shia" width="400" autoplay="true" loop="true">
            <source src="justDoIt.mp4" type="video/mp4" />
          </video>
        </div>
      ) 
    }
  }
}

export default TimerWrapper