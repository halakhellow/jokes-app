import React from "react";
import JokesList from "./components/JokesList/JokesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <span> Dad </span>Jokes
      </h1>
      <JokesList />
    </div>
  );
}

export default App;
