import React from "react";
import "./PianoKey.css"

const PianoKey = (props) => {

  const playKey = () => {
    props.handleClickPlayNote(props.note)
  }

  // function playNote(e){
  //   const key = document.querySelector(`div[dataKey="${e.key}"]`)
  //   if (key){
  //     console.log(e);
  //       props.handlePlayNote(props.note)
  //
  //   }
  //
  // }
  //
  //
  // window.addEventListener('keypress', playNote);



  return (
    <div onClick={playKey} className={ props.class }>
      <div className="key" data-key={ props.input } note={ props.note }>
      </div>
    </div>
  )

}

export default PianoKey
