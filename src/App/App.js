import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      charactersData: [],
      planetsData: [],
      favorites: []
    }
  }

  componentDidMount = () => {
    const movieNumber =  Math.floor(Math.random() * (6 - 2 + 1)) + 1
    movieTitles('https://swapi.co/api/films')
    .then(data => this.setMovie(data.results[movieNumber])
      // console.log('returned data is: ', data);
    )
      .catch(error => console.log('Holy batsmoke, something went wrong in App!'))
  }

  setMovie = (movieData) => {
    this.setState({ movieData })
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
