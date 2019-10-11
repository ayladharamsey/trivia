import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import Container from '../Container/Container';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import { Route, NavLink } from 'react-router-dom';

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

  signOut = () => {
    console.log('ya made it hunny')
    this.setState({
      name: '',
      quote: '',
      rating: '',
    })
    //needs to route us back to login form
  }

  viewFavoriteCharacters() {
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
    const { movieData, name, quote, rating, isFavorited, errMsg} = this.state;
    return (
      <main className="app">
        
        <Form 
          name={this.state.name}
          quote={this.state.quote}
          rating={this.state.rating}
          updateAppState={this.updateAppState}
        />
        <HeaderContainer 
          name={this.state.name} 
          quote={this.state.quote} 
          rating={this.state.rating} 
          signOut={this.signOut} 
          viewFavoriteCharacters={this.viewFavoriteCharacters}
          />
        <Container />
        <p>
        {movieData.length && <OpeningCrawl 
          title={movieData[6].title}
          date={movieData[6].release_date}
          episode={movieData[6].episode_id}
          text={movieData[6].opening_crawl}
          />}
        </p>
        </main>
    )
  }
}

export default App;
