import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
  render() {
    return (
      <div>
          <div>Available Letters</div>
          {Object.keys(this.props.letters).map((l,index) =>
          <Letter key={index} letter={l} 
           selectLetter={this.props.selectLetter}
           class={this.props.letters[l] ? "checked" : ""}
           />)}
      </div>
    )
  }
}

export default Letters