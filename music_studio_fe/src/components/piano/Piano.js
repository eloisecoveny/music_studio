import React from "react";
import PianoKey from "./PianoKey"
import Tone from "tone"
import Request from "../../helpers/request"
import "./Piano.css"


class Piano extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blob: null,
      recording: false,
      audio: null,
      synth: null,
      context: null,
      destination: null,
      recorder: null
    }
    this.handlePlayNote = this.handlePlayNote.bind(this)
    this.playNote = this.playNote.bind(this)
    this.startRecord = this.startRecord.bind(this)
    this.stopRecord = this.stopRecord.bind(this)
    this.saveAudio = this.saveAudio.bind(this)
  }

  componentDidMount(){
    window.addEventListener('keydown', this.playNote);
  }

  startRecord(){
    this.state.recorder.start()
  }

  stopRecord(){
    this.state.recorder.stop();
  }


  handlePlayNote(note){
    if (!this.state.recorder){
      const audio = document.querySelector("audio")
      const synth = new Tone.Synth();
      const context = Tone.context;
      const destination = context.createMediaStreamDestination();
      const recorder = new MediaRecorder(destination.stream)
      this.setState({ audio: audio, synth: synth, context: context, destination: destination, recorder: recorder })
    } else if (this.state.recorder){
      this.state.synth.connect(this.state.destination)
      this.state.synth.toMaster();

      const chunks = [];




      this.state.synth.triggerAttack(note)

      window.addEventListener("keyup", () => {
        this.state.synth.triggerRelease()
      })

      window.addEventListener("mouseup", () => {
        this.state.synth.triggerRelease()
      })

      const recorder = this.state.recorder

      recorder.ondataavailable = evt => chunks.push(evt.data);
      recorder.onstop = evt => {
        let audio = this.state.audio
        let blob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
        let audioUrl = URL.createObjectURL(blob);
        audio.src = audioUrl
        this.setState({ blob: blob })
        console.log(this.state.blob);
      }
    }
  }

  saveAudio(){
    const request = new Request()
    const payload = {
      name: "sequence 1",
      project: "http://localhost:8080/api/projects/1",
      user: "http://localhost:8080/api/users/1",
      audio: this.state.blob
    }
    request.post("/api/sequences", payload)
  }



  playNote(e){
    const key = document.querySelector(`div[data-key="${e.key}"]`)
    if (key){
      this.handlePlayNote(key.getAttribute("note"));

    }

  }

  render(){



    const notes = [{note: "A4", input: "a"}, {note: "A7", input: "1"}, {note: "B4", input: "s"}, {note: "C4", input: "q"}, {note: "C7", input: "2"}, {note: "D4", input: "w"}, {note: "D7", input: "3"}, {note: "E4", input: "e"}, {note: "F4", input: "r"}, {note: "F7", input: "4"}, {note: "G4", input: "t"}, {note: "G7", input: "5"}, {note: "A5", input: "y"}, {note: "A8", input: "6"}, {note: "B5", input: "u"}, {note: "C5", input: "i"}, {note: "C8", input: "7"}, {note: "D5", input: "o"}, {note: "D8", input: "8"}, {note: "E5", input: "p"}, {note: "F8", input: "9"}, {note: "F5", input: "k"}, {note: "G8", input: "0"}, {note: "G5", input: "l"}]

    const keys = notes.map((note, index) => {
       return <PianoKey handlePlayNote={ this.handlePlayNote } note={ note.note } input={ note.input } key={ index }></PianoKey>
    })

    return (
      <div className="piano">
        <h1>I am piano!</h1>
        <button onClick={ this.startRecord }>start</button>
        <button onClick={ this.stopRecord }>stop</button>
        { keys }
        <audio controls></audio>
        <button onClick={ this.saveAudio }>Save audio</button>
      </div>
    )

  }



}

export default Piano
