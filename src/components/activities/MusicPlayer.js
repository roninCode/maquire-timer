import React from 'react';
import Sound from 'react-sound';

export class MusicPlayer extends React.Component{
  render(){
    return(
      <Sound url="pumpIt.mp3"
          playStatus={Sound.status.PLAYING}
          playbackRate={1.2}
      />
    )
  }
}
export default MusicPlayer;