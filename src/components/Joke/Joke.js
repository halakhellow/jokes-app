import React, { Component } from "react";

import "./Joke.css";

class Joke extends Component {
  getColor() {
    let votes = this.props.votes;
    if (votes >= 15) return "#4caf50";
    else if (votes >= 12) return "#6bc34a";
    else if (votes >= 9) return "#cddc39";
    else if (votes >= 6) return "#ffeb3b";
    else if (votes >= 3) return "#ffc107";
    else if (votes >= 0) return "#ff9b00";
    else return "#f44336";
  }

  getEmoji() {
    let votes = this.props.votes;
    if (votes >= 15) return "em em-rolling_on_the_floor_laughing";
    else if (votes >= 12) return "em em-laughing";
    else if (votes >= 9) return "em em-grin";
    else if (votes >= 6) return "em em-smiley";
    else if (votes >= 3) return "em em-slightly_smiling_face";
    else if (votes >= 0) return "em em-face_with_rolling_eyes";
    else return "em em-angry";
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-btns">
          <i className="far fa-thumbs-up" onClick={this.props.upvote}></i>
          <span style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <i className="far fa-thumbs-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">{this.props.joke}</div>
        <i className={this.getEmoji()}></i>
      </div>
    );
  }
}

export default Joke;
