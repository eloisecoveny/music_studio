import React, { Component } from "react";

class RecordingTools extends Component {

  render(){
    return (
      <div className="recording-tools">
        <button>rewind</button>
        <button>play</button>
        <button>pause</button>
        <button>record</button>
        <button>save</button>
      <input type="text" placeholder="name"/>
      </div>
    )
  }

}

export default RecordingTools
