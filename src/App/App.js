import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rating: '',
      isFavorited: false
    }
  }

  updateState = (formState) => {
    console.log('formstate', formState)
    this.setState({
      name: formState.name[0], //why are these coming thru as arrays?
      quote: formState.quote[0],
      rating: formState.rating // not coming through, never assigned in Form 
    })
    console.log(this.state)
  }

  componentDidMount = () => {
    return  movieTitles('https://swapi.co/api/films').then(data => console.log('returned data is: ', data))
      .catch(error => console.log('Holy batsmoke, something went wrong in App!'))
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
