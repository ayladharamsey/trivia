import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import Container from '../Container/Container'

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

  signOut = () => {
    console.log('ya made it hunny')
    this.setState({
      name: '',
      quote: '',
      rating: '',
    })
    //needs to route us back to login form
  }

  viewCharacters() {
    console.log('viewing characters')
    //needs to take us to the character information page
  }

  updateAppState = (formState) => {
    this.setState({
      name: formState.name, 
      quote: formState.quote,
      rating: formState.rating 
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
    return (
      <main className="app">
        <Form 
          name={this.state.name}
          quote={this.state.quote}
          rating={this.state.rating}
          updateAppState={this.updateAppState}
        />
        <HeaderContainer name={this.state.name} quote={this.state.quote} rating={this.state.rating} signOut={this.signOut} viewCharacters={this.viewCharacters}/>
        <Container />
      </main>
    )
  }
}

export default App;
