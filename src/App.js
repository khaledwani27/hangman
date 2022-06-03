import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus:{
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: true,
        M: false,
        N: false,
        O: true,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
      },// this.generateLetterStatuses(),
      solution:{
        secretWord:"LION",
        hint:"a strong wild animal"
      },
      score:100
    }
  }

  generateLetterStatuses() {
    const letterStatus = {}
    for (let index = "A".charCodeAt(); index <= "Z".charCodeAt(); index++) {
      let char = String.fromCharCode(index)
      letterStatus[char] = false
    }
    return letterStatus
  }


  render() {

    return (
      <div >
        <Score score={this.state.score}/>
        <Solution solution={this.state.solution} letters={this.state.letterStatus} />
        <Letters letters={this.state.letterStatus}/>
      </div>
    )
  }
}

export default App;
