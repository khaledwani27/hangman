import React, { Component } from 'react'

export class Letter extends Component {
  letterSelect =() =>{
     this.props.selectLetter(this.props.letter)
  }
  render() {
    return (
      <span className={this.props.class} onClick={this.letterSelect}>{this.props.letter}</span>
    )
  }
}

export default Letter