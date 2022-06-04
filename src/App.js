import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import { EndGame } from './components/EndGame';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        secretWord: "LION",
        hint: "a strong wild animal"
      },
      score: 100,
      isEndGame: {
        status: false,
        message: ""
      },
      gussedLetters: 0
    }
  }
  gamestatus = () => {

  }

  generateLetterStatuses() {
    const letterStatus = {}
    for (let index = "A".charCodeAt(); index <= "Z".charCodeAt(); index++) {
      let char = String.fromCharCode(index)
      letterStatus[char] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    if (!this.state.letterStatus[letter]) {
      const word = this.state.solution.secretWord
      let gussedLetters = 0
      let points = -20
      let letterStatus = JSON.parse(JSON.stringify(this.state.letterStatus));
      letterStatus[letter] = true

      for (let i = 0; i < word.length; i++) {

        if (letter === word[i]) {
          gussedLetters=1
          points = 5
          break;
        }
      }

      let currentScore = this.state.score + points
      const updateState = {
        letterStatus: letterStatus,
        score: currentScore,
        gussedLetters: this.state.gussedLetters+ gussedLetters

      }

      if (this.state.gussedLetters+gussedLetters === word.length) {
        updateState.isEndGame = {
          status: true,
          message: "Congratulations"
        }
      }
      else if (currentScore <= 0) {
        updateState.isEndGame = {
          status: true,
          message: "the secret word is " + word
        }
      }


      this.setState(updateState)
    }

  }

  render() {

    return (
      <div className='App'>
        {this.state.isEndGame.status ? <EndGame message={this.state.isEndGame.message} /> :
          <div >
            <Score score={this.state.score} />
            <Solution solution={this.state.solution} letters={this.state.letterStatus} />
            <Letters letters={this.state.letterStatus} selectLetter={this.selectLetter} />
          </div>}
      </div>

    )
  }
}

export default App;
