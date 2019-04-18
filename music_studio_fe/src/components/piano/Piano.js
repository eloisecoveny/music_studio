import React from "react";
import PianoKey from "./PianoKey"
import Tone from "tone"
import Request from "../../helpers/request"
import RecordingTools from "../recording/RecordingTools"
import "./Piano.css"


class Piano extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      audioData: "",
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
    this.generateContext = this.generateContext.bind(this)
    this.clickHandlePlayNote = this.clickHandlePlayNote.bind(this)
  }

  componentDidMount(){
    let heldKeys = []
    window.addEventListener('keydown', (e) => {
      if (!heldKeys.includes(e.key)){
        heldKeys.push(e.key)
        this.playNote(e)
      } else {
        return null
      }
    });
    this.generateContext()
    window.addEventListener("keyup", (e) => {
      if (heldKeys.includes(e.key)){
        let index = heldKeys.indexOf(e.key)
        heldKeys.splice(index, 1)
        this.state.synth.triggerRelease()
      }

    })
  }

  clickHandlePlayNote(note){
    this.state.synth.triggerAttackRelease(note, 0.2)
  }

  startRecord(){
    if (!this.state.recording){
      this.state.recorder.start()
      this.setState({ recording: true })
    }
  }

  stopRecord(){
    if (this.state.recording){
      this.state.recorder.stop()
      this.setState({ recording: false })
    }

  }

  generateContext(){
    const audio = document.querySelector("audio")
    const synth = new Tone.Synth({
        "oscillator" : {
          "type" : "sine4",
          "modulationFrequency" : 0.4
        }
    });
    const context = Tone.context;
    const destination = context.createMediaStreamDestination();
    const recorder = new MediaRecorder(destination.stream)
    this.setState({ audio: audio, synth: synth, context: context, destination: destination, recorder: recorder })
  }


  handlePlayNote(note){
    if (this.state.recorder){
      this.state.synth.connect(this.state.destination)
      this.state.synth.toMaster();

      const chunks = [];

      this.state.synth.triggerAttack(note)




      window.addEventListener("mouseup", () => {
        this.state.synth.triggerRelease()
      })

      const recorder = this.state.recorder

      recorder.ondataavailable = evt => chunks.push(evt.data);
      recorder.onstop = evt => {
        let audio = this.state.audio
        let blob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
        let audioUrl = URL.createObjectURL(blob);
        let base64data = ""
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          base64data = reader.result;
          this.setState({ audioData: base64data })
        }
        audio.src = audioUrl

      }
    }
  }

  saveAudio(name){
    const request = new Request()
    const payload = {
      name: name,
      project: "http://localhost:8080/api/users/" + this.props.currentProject.id,
      user: "http://localhost:8080/api/users/" + this.props.currentUser.id,
      audio: this.state.audioData
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



    const notes = [{note: "A4", input: "a"}, {note: "A#4", input: "1"}, {note: "B4", input: "s"}, {note: "C4", input: "q"}, {note: "C#4", input: "2"}, {note: "D4", input: "w"}, {note: "D#4", input: "3"}, {note: "E4", input: "e"}, {note: "F4", input: "r"}, {note: "F#4", input: "4"}, {note: "G4", input: "t"}, {note: "G#4", input: "5"}, {note: "A4", input: "y"}, {note: "A#4", input: "6"}, {note: "B4", input: "u"}, {note: "C5", input: "i"}, {note: "C#4", input: "7"}, {note: "D5", input: "o"}, {note: "D#5", input: "8"}, {note: "E5", input: "p"}, {note: "F#5", input: "9"}, {note: "F5", input: "k"}, {note: "G#5", input: "0"}, {note: "G5", input: "l"}]

    const keys = notes.map((note, index) => {
      return <PianoKey handleClickPlayNote={ this.clickHandlePlayNote } note={ note.note } input={ note.input } key={ index }></PianoKey>
    })

    return (
      <div className="piano">
        <h1>I am piano!</h1>
        <RecordingTools startRecord={ this.startRecord } stopRecord={ this.stopRecord } saveAudio={ this.saveAudio }></RecordingTools>
        { keys }
        <audio id="main-audio"></audio>
      </div>
    )

  }



}

export default Piano
