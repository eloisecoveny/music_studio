import React from "react";
import PianoKey from "./PianoKey"


const Piano = (props) => {

  const notes = ["middle_a", "mid_a_sharp", "middle_b", "middle_c", "mid_c_sharp", "middle_d", "mid_d_sharp", "middle_e", "middle_f", "mid_f_sharp", "middle_g", "mid_g_sharp", "high_a", "high_a_sharp", "high_b", "high_c", "high_c_sharp", "high_d", "high_d_sharp", "high_e", "high_f_sharp", "high_f", "high_g_sharp", "high_g"]

  const keys = notes.map((end_link, index) => {
     return <PianoKey className={end_link} key={ index } sound={require( `../sounds/${props.sound}/${end_link}.mp3` )}></PianoKey>
  })

  return (
    <div className="piano">
      <h1>I am piano!</h1>
      { keys }
    </div>
  )
}

export default Piano
