import React, { Component } from "react";
import emoji from "./images/emoji.png";
import { v4 as uuidv4 } from "uuid";
import Joke from "./Joke";
import "./JokesList.css";

class JokesList extends Component {
  static defaultProps = {
    jokesNum: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    let jokes = [];
    //while loop is sync and fetch is async => that's why we have to use async await here
    while (jokes.length < this.props.jokesNum) {
      let res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      let data = await res.json();
      jokes.push({ text: data.joke, votes: 0, id: uuidv4() });
    }
    this.setState({ jokes: jokes });
  }

  handleVotes(id, delta) {
    this.setState((st) => ({
      jokes: st.jokes.map((joke) =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      ),
    }));
  }

  render() {
    return (
      <div className="JokesList">
        <div className="JokesList-aside">
          <h1>Dad Jokes</h1>
          <img src={emoji} alt="laughing-emoji" />
          <button>New Jokes</button>
        </div>
        <div className="JokesList-jokes">
          {this.state.jokes.map((joke) => (
            <Joke
              key={joke.id}
              votes={joke.votes}
              joke={joke.text}
              upvote={() => this.handleVotes(joke.id, 1)}
              downvote={() => this.handleVotes(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokesList;
