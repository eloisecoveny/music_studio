import React from "react";

const PianoKey = (props) => {
  return (
    <div className={props.className}>
      <div className="key">
        <audio controls src={props.sound}></audio>
      </div>
    </div>
  )

}

export default PianoKey
