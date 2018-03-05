import React from 'react'

export class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      durationInSecs: this.props.seconds,
      started: false,
      prettySeconds: "00",
      prettyMinutes: "00"
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.countDownOneSecond = this.countDownOneSecond.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.prettySeconds = this.prettySeconds.bind(this);
    this.prettyMinutes = this.prettyMinutes.bind(this);
  }

  componentDidMount(){
    this.prettyMinutes();
    this.prettySeconds();
  }

  handleIncrement(){
    this.setState({
      durationInSecs: this.state.durationInSecs + 60
    })
    this.prettyMinutes();
    this.prettySeconds();
  }

  handleDecrement(){
    this.setState({
      durationInSecs: this.state.durationInSecs - 60
    })
    this.prettyMinutes();
    this.prettySeconds();
  }

  countDownOneSecond(){
    if (this.state.durationInSecs < 1){
      this.setState({
        started: false,
      })
      clearInterval(this.timerInterval)  
      this.props.onTimerCompleted();
    }

    if(this.state.started === false) {
      clearInterval(this.timerInterval)
    }

    this.setState({
      durationInSecs: this.state.durationInSecs - 1
    });

    this.prettySeconds();
    this.prettyMinutes();
  }

  handleStartTimer(){
    if (this.state.started === false){
      this.setState({
        started: true
      })

      this.timerInterval = setInterval( 
        this.countDownOneSecond, 1000
      )  
    }
  }

  handleResetTimer(){
    clearInterval(this.timerInterval);

    this.setState({
      durationInSecs: this.props.seconds,
      started: false,
    })

    this.prettyMinutes();
    this.prettySeconds();
  }

  prettySeconds(){
    let seconds = this.state.durationInSecs;
    if (seconds % 60 === 0){
      seconds = "00"
    } else if(Math.floor(seconds % 60).toString().length < 2){
      seconds = "0" + Math.floor(seconds % 60).toString();
    } 
    else{
      seconds = (seconds % 60).toString();
    }
    this.setState({
      prettySeconds: seconds
    })
  }

  prettyMinutes(){
    let minutes = Math.floor(this.state.durationInSecs / 60).toString();
    if (minutes.toString().length < 2){
      minutes = "0" + minutes.toString();
    } else {
      minutes = minutes.toString();
    }
    
    this.setState({
      prettyMinutes: minutes,
    })
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval);
  }
 
  render() {
    return(
      <div>
        <h1>{this.state.prettyMinutes}: {this.state.prettySeconds}</h1>
        <button onClick={ this.handleIncrement }>Increment</button>
        <button onClick={ this.handleDecrement }>Decrement</button>
        <button onClick={ this.handleStartTimer }>Start Timer</button>
        <button onClick={ this.handleResetTimer }>Reset</button>
      </div>
    )
  }
}
export default Timer