import React from "react";
import "./PianoKey.css"

const PianoKey = (props) => {

  const playKey = () => {
    const key = document.getElementById(props.className)
    key.play()
  }

  function playNote(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    if (audio){
      audio.play()
    }

  }


  window.addEventListener('keydown', playNote);



  return (
    <div className={props.className}>
      <div onClick={playKey} className="key">
        <audio id={ props.className } data-key={props.dataKey} src={props.sound}></audio>
      </div>
    </div>
  )

}

export default PianoKey
