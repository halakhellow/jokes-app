import React, { Component } from "react";

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
      jokes.push(data.joke);
    }
    this.setState({ jokes: jokes });
  }

  render() {
    return (
      <div>
        <h1>Dad Jokes</h1>
        {this.state.jokes.map((joke) => (
          <div>{joke}</div>
        ))}
      </div>
    );
  }
}

export default JokesList;
