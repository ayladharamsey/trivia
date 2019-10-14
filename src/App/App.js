import React, { Component } from 'react';
import { movieTitles, getCharacters, getPeople, getSpecies, getPlanets, getResidents } from '../apiCalls';
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
      favoriteCards: [1, 2  ],
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

  updateAppState = (formState) => {
    console.log('updateAppState', formState);
    this.setState({
      name: formState.name, 
      quote: formState.quote,
      rating: formState.rating 
    })
  }

  updateFavoriteCard = (favoriteStatus) => {
    if(!this.state.favoriteCards.includes(favoriteStatus)) {
      favoriteStatus[6] = !favoriteStatus[6]
      this.setState({ favoriteCards: [...this.state.favoriteCards, favoriteStatus]});
    } else {
      favoriteStatus[6] = !favoriteStatus[6];
      const removeCard = this.state.favoriteCards.filter(card => card !== favoriteStatus)
      this.setState({ favoriteCards: removeCard });
    } 
  }
  componentDidMount = () => {
    movieTitles('https://swapi.co/api/films')
    .then(data => this.setMovie(data))
    .catch(error => console.log('Holy bat smoke, something went wrong in App!'))
  
    getCharacters('https://swapi.co/api/people/')
    .then(data => getPeople(data.results))
    .then(data => getSpecies(data))
    .then(data => this.setCharacters(data))

    getPlanets('https://swapi.co/api/planets/')
    // .then(data => console.log('planet data is : ', data))
    .then(data => getResidents(data.results))
    .then(data => this.setPlanets(data))
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
                      characters={this.state.movieData.characters}
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
