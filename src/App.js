import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// To do Ajax in a React app:
// 0. optional: install axios
// 1. you need a class component
// 2. add ajax requests (componentDidMount is the "earliest")

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {}     // By default, set your state to an empty version of what you expect
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/583');
    console.log(response.data);
    this.setState({
      character: response.data
    }, () => {
      console.log('done setting state');
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>name: {this.state.character.name}</li>
          <li>born: {this.state.character.born}</li>
          <li>culture: {this.state.character.culture}</li>
        </ul>
      </div>
    );
  }
}


export default App;
