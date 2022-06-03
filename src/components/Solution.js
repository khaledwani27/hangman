import React, { Component } from 'react'
import Letter from './Letter'

export class Solution extends Component {
  render() {
    return (
      <div> 
          {this.props.solution.secretWord.split("").map((w,index) => <Letter key={index} letter={this.props.letters[w]? w : '-'}/>)}
          <div>
              <em>{this.props.solution.hint}</em>
          </div>
      </div>
    )
  }
}

export default Solution
//{this.props.word.map((w,index) => <span key={index}>  {w}  </span>)}