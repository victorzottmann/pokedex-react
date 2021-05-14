import React from "react";

import "./App.css";

// component classes are useful because they offer more control in the form of lifecycle hooks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  /* 
    in a regular function the 'this' keyword refers to the function itself,
    but in an arrow function it refers to the class
  */
  // handleSubmit = () =>
  handleSubmit = (event) => {
    event.preventDefault();
    const baseUrl = "https://pokeapi.co/api/v2/";
    fetch(`${baseUrl}pokemon/${this.state.searchValue}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  handleTextUpdate = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <>
        <h3>Search for a Pokemon:</h3>
        <form onSubmit={this.handleSubmit}>  
          <input
            placeholder="eg bulbasaur"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleTextUpdate}
          />
          <button type="submit">Get Pokemon</button>
        </form>
      </>
    );
  }
}

export default App;
