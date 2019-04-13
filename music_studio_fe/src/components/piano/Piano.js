import React from "react";
import PianoKey from "./PianoKey"
import "./Piano.css"


const Piano = (props) => {

  const notes = [{note: "middle_a", input: "a"}, {note: "mid_a_sharp", input: "1"}, {note: "middle_b", input: "s"}, {note: "middle_c", input: "q"}, {note: "mid_c_sharp", input: "2"}, {note: "middle_d", input: "w"}, {note: "mid_d_sharp", input: "3"}, {note: "middle_e", input: "e"}, {note: "middle_f", input: "r"}, {note: "mid_f_sharp", input: "4"}, {note: "middle_g", input: "t"}, {note: "mid_g_sharp", input: "5"}, {note: "high_a", input: "y"}, {note: "high_a_sharp", input: "6"}, {note: "high_b", input: "u"}, {note: "high_c", input: "i"}, {note: "high_c_sharp", input: "7"}, {note: "high_d", input: "o"}, {note: "high_d_sharp", input: "8"}, {note: "high_e", input: "p"}, {note: "high_f_sharp", input: "9"}, {note: "high_f", input: "k"}, {note: "high_g_sharp", input: "0"}, {note: "high_g", input: "l"}]

  const keys = notes.map((end_link, index) => {
     return <PianoKey className={end_link.note} dataKey={ end_link.input } key={ index } sound={require( `../../sounds/${props.sound}/${end_link.note}.mp3` )}></PianoKey>
  })

  return (
    <div className="piano">
      <h1>I am piano!</h1>
      { keys }
    </div>
  )
}

export default Piano
