import React from "react";

import "./App.css";


// component classes are useful because they offer more control in the form of lifecycle hooks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      imageSource: "",
      loading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true })

    const baseUrl = "https://pokeapi.co/api/v2/";
    fetch(`${baseUrl}pokemon/${this.state.searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imageData = data.sprites.other["official-artwork"].front_default;
        this.setState({
          imageSource: imageData,
        });
        console.log(imageData);
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ loading: false }));
  };

  handleTextUpdate = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  clear = () => {
    this.setState({
      imageSource:""
    })
  }

  render() {
    const { searchValue, imageSource, loading } = this.state;

    if (loading) {
      return <p>loading...</p>
    }

    return (
      <>
        <h3>Search for a Pokemon:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="eg bulbasaur"
            type="text"
            value={searchValue}
            onChange={this.handleTextUpdate}
          />
          <button type="submit">Get Pokemon</button>
        </form>
        <br />
        <button onClick={this.clear}>Clear</button>
        {imageSource && <img src={imageSource} alt="a pokemon" />}
      </>
    );
  }
}

export default App;
