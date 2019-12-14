import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then((response) => {
      console.log("Component did mount", response);
      this.setState({players: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    console.log(this.state);
    return (
      <h1>Hello</h1>
    );
  }
}

export default App;