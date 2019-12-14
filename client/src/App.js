import React from 'react';
import axios from "axios";
import Cards from "./components/Cards";
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
      
      this.setState({players: response.data})
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    console.log(this.state);
    return (
     this.state.players.length > 0 ? this.state.players.map(item => ( <Cards player={item} /> )) : null
    );
  }
}

export default App;