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
      name: '',
      quote: '',
      rating: '',
      isFavorited: false,
      errMsg: ''
    }
  }

  updateState = (formState) => {
    this.setState({
      name: formState.name[0], //why are these coming thru as arrays?
      quote: formState.quote[0],
      rating: formState.rating // not coming through, never assigned in Form 
    })
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
      <main className="app">
        <Form 
          name={this.state.name}
          quote={this.state.quote}
          rating={this.state.rating}
          updateState={this.updateState}
        />
      </main>
    )
  }
}

export default App;
