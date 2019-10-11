import React, { Component } from 'react';
import { movieTitles } from '../apiCalls';
import Form from '../Form/Form';
import './App.css';
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import Container from '../Container/Container';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
// import { Route, NavLink } from 'react-router-dom';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';

const history = createBrowserHistory();
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
    this.setState({
      name: '',
      quote: '',
      rating: '',
    })
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
        <BrowserRouter>
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
                      isFavorited={this.state.isFavorited}
                    />
                  </>
                }
              />
              <Route>
                {movieData.length && <OpeningCrawl 
                  title={movieData[6].title}
                  date={movieData[6].release_date}
                  episode={movieData[6].episode_id}
                  text={movieData[6].opening_crawl}
                  />}
              </Route>  
            </Switch>
          </BrowserRouter>
        </main>
    )
  }
}

export default App;
