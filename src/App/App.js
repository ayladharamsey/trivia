import React, { Component } from 'react';
import { movieTitles, getFilmTitles, getMovieCharacters, getPeople, getSpecies, getPlanets } from '../apiCalls';
import Form from '../Form/Form';
import './App.scss';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import Container from '../Container/Container';
import { Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [],
      name: '',
      quote: '',
      rating: '',
      errMsg: ''
    }
  }

  signOut = () => {
    this.setState({
      name: '',
      quote: '',
      rating: '',
    })
  }

  updateAppState = ({ name, quote, rating }) => {
    this.setState({
      name: name, 
      quote: quote,
      rating: rating 
    })
  }

  updateFavoriteCard = (favoriteStatus) => {
    console.log('favorite data ', favoriteStatus, this.state.favoriteCards);
     if(!this.state.favoriteCards.includes(favoriteStatus)) {
      this.setState({ favoriteCards: [...this.state.favoriteCards, favoriteStatus]});
        
    } else {
      console.log('favorite else');
     const removeCard = this.state.favoriteCards.filter(card => card !== favoriteStatus)
       this.setState({ favoriteCards: removeCard });
    } 
  }

  componentDidMount = () => {
    movieTitles('https://swapi.co/api/films')
    .then(data => {
      return this.setMovie(data)})
    .catch(error => console.log(error.message, 'Holy bat smoke, something went wrong in App!'))
  
    getMovieCharacters(6) //Remember to make this dynamic
    .then(data => {
      return data
    })
    .then(data => getFilmTitles(data))
    .then(data => {
      return getPeople(data)})
    .then(data => getSpecies(data))
    .then(data => this.setCharacters(data))
  }

  setMovie = (movieData) => {
    movieData.sort((a, b) => {
      return a.episode_id - b.episode_id
    });
    this.setState({ movieData })
  }

  setCharacters = (characterData) => {
    this.setState({ characterData })
  }
  
  setPlanets = (planetData) => {
    this.setState({ planetData })
  }

  render() {
    const { movieData } = this.state;
    return (
      <main className="app">
          <Switch>
            <Route 
              path='/' 
              exact 
              render={() => <Form history={history} updateAppState={this.updateAppState}/>}
            />
            <Route
              path='/movies'  
              exact
              render={ () => 
                <>
                  <HeaderContainer 
                    name={this.state.name} 
                    quote={this.state.quote} 
                    rating={this.state.rating} 
                    signOut={this.signOut} 
                  />
                  <Container movieData={this.state.movieData}/>
                </>
              }
            />
            <Route
              path='/movies/:id/characters'  
              exact
              render={ ({ match }) => { 
                const { characters, favorites } = match.params;
                return(
                  <>
                  <HeaderContainer 
                      name={this.state.name} 
                      quote={this.state.quote} 
                      rating={this.state.rating} 
                      signOut={this.signOut} 
                    />
                    <Container 
                      charactersData={this.state.characterData} 
                      favoriteCards={this.state.favoriteCards}
                      favoriteStatus={this.updateFavoriteCard}
                    />
                  </>
                )
                }                
              }
            />
            <Route
              path='/movies/:id/characters/favorites'  
              exact
              render={ () => 
                <>
                  <HeaderContainer 
                    name={this.state.name} 
                    quote={this.state.quote} 
                    rating={this.state.rating} 
                    signOut={this.signOut} 
                  />
                  <Container 
                    charactersData={this.state.charactersData} 
                    planetsData={this.state.planetsData}
                    favoriteCards={this.state.favoriteCards}
                  />
                </>
              }
            />
            <Route
              exact path='/movies/:id'
              render={ ( {match} ) => { 
                const { id } = match.params;
                const numId = parseInt(id)
                return(
                  <OpeningCrawl 
                      title={movieData[numId - 1].title}
                      date={movieData[numId - 1].release_date}
                      episode={movieData[numId - 1].episode_id}
                      text={movieData[numId - 1].opening_crawl}
                      favoriteCards={this.state.favoriteCards}
                      characters={this.state.characterData}
                    />
                 )
                }   
              }
            /> 
          </Switch>
      </main>
    )
  }
}

export default App;
