import React from "react";

class RecordingTools extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sequenceName: ""
    }

    this.handleInput = this.handleInput.bind(this)
    this.playAudio = this.playAudio.bind(this)
    this.handleSaveAudio = this.handleSaveAudio.bind(this)
  }

  handleInput(e){
    this.setState({ sequenceName: e.target.value })
  }

  playAudio(){
    const player = document.getElementById("main-audio")
    player.play()
  }

  handleSaveAudio(){
    this.props.saveAudio(this.state.sequenceName)
    this.setState({ sequenceName: "" })
  }

  render(){
    return (
      <div className="recording-tools">
      <button onClick={ this.playAudio }>Play</button>
      <button onClick={ this.props.startRecord } >Record</button>
      <button onClick={ this.props.stopRecord } >Stop Record</button>
      <input onChange={ this.handleInput } type="text" placeholder="Recording name" value={ this.state.sequenceName }/>
      <button onClick={ this.handleSaveAudio }>Save recording</button>
      </div>
    )
  }


}

export default RecordingTools
