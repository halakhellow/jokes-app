import React, { Component } from "react";

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-btns">
          <i className="fas fa-arrow-up"></i>
          <span>{this.props.votes}</span>
          <i className="fas fa-arrow-down"></i>
        </div>
        <div className="Joke-text">{this.props.joke}</div>
      </div>
    );
  }
}

export default Joke;
