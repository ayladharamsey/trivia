import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      characterData: [],
      planetData: [],
      name: '',
      quote: '',
      rating: '',
      isFavorited: false,
      errMsg: ''
    }
  }

  updateAppState = (formState) => {
    this.setState({
      name: formState.name, //why are these coming thru as arrays?
      quote: formState.quote,
      rating: formState.rating // not coming through, never assigned in Form 
    })
  }

  componentDidMount = () => {
    movieTitles('https://swapi.co/api/films')
    .then(data => this.setMovie(data)
      // console.log('returned data is: ', data);
    )
    .catch(error => console.log('Holy batsmoke, something went wrong in App!'))
  }

  setMovie = (movieData) => {
    this.setState({ movieData })
  }

  render() {
    const { movieData, characterData, planetData, name, quote, rating, isFavorited, errMsg} = this.state;
    return (
      <main className="app">
        <Form 
          name={this.state.name}
          quote={this.state.quote}
          rating={this.state.rating}
          updateAppState={this.updateAppState}
        />
      </main>
    )
  }
}

export default App;
