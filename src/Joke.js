import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-btns">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
          <span>{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">{this.props.joke}</div>
        <i className="em em-confused"></i>
      </div>
    );
  }
}

export default Joke;
