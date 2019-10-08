import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    return  movieTitles('https://swapi.co/api/films').then(data => console.log('returned data is: ', data))
      .catch(error => console.log('Holy batsmoke, something went wrong in App!'))

  }

  render() {
    return(
      <main>
        <Form />
      </main>
    )
  }
}

export default App;
