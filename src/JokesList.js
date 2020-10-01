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
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((joke) => joke.text));
    this.getNewJokes = this.getNewJokes.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    let jokes = [];
    //while loop is sync and fetch is async => that's why we have to use async await here
    while (jokes.length < this.props.jokesNum) {
      let res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      let data = await res.json();
      if (!this.seenJokes.has(data.joke))
        jokes.push({ text: data.joke, votes: 0, id: uuidv4() });
    }
    this.setState(
      (st) => ({ loading: false, jokes: [...st.jokes, ...jokes] }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleVotes(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((joke) =>
          joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  getNewJokes() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <i className="far fa-8x fa-grin-stars fa-spin"></i>
          <h1>Loading ...</h1>
        </div>
      );
    } else {
      return (
        <div className="JokesList">
          <div className="JokesList-aside">
            <h1>
              Dad <span>Jokes</span>
            </h1>
            <img src={emoji} alt="laughing-emoji" />
            <button onClick={this.getNewJokes}>New Jokes</button>
          </div>
          <div className="JokesList-jokes">
            {this.state.jokes
              .sort((a, b) => b.votes - a.votes)
              .map((joke) => (
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
}

export default JokesList;
