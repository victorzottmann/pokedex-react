import React from "react";

import "./App.css";

// component classes are useful because they offer more control in the form of lifecycle hooks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
    /* 
      this line is needed in order to declare regular functions in class 
      components, otherwise use arrow functions
    */
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('component mounted');
    const baseUrl = "https://pokeapi.co/api/v2/"
    fetch(`${baseUrl}pokemon/bulbasaur`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  componentDidUpdate() {
    console.log('the component updated!');
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  shouldComponentUpdate() {
    if (this.state.timesClicked % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  /* 
    in a regular function the 'this' keyword refers to the function itself,
    but in an arrow function it refers to the class
  */
  // handleClick = () =>
  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
    console.log(this.state.timesClicked);
  };

  render() {
    return (
      <>
        <h3>Times clicked: {this.state.timesClicked}</h3>
        <input type="text" />
        <button onClick={this.handleClick}>Click me!</button>
      </>
    );
  }
}

export default App;
