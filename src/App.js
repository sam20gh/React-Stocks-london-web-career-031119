import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }));
  }
  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
