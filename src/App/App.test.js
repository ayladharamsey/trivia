import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Functionality ', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty state initially', () => {
    expect(wrapper.state()).toEqual({
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [],
      name: '',
      quote: '',
      rating: '',
      errMsg: ''
    });

  });

  it('should be able to sign out of the application', () => {
    wrapper.state({
      movieData: ['', ''],
      characterData: ['tina turner', 'maya angelous', 'ilana glazer'],
      planetData: ['mercury', 'venus', 'earth'],
      favoriteCards: [1, 2],
      name: 'ida djamsey',
      quote: 'world peace is cool',
      rating: 'magikal',
      errMsg: 'hold up, wait a minute'
    })
    wrapper.instance().signOut();
    expect(wrapper.state()).toEqual({
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [],
      name: '',
      quote: '',
      rating: '',
      errMsg: ''
    });
  });

  it.skip('should be able update the state with the users info', () => {
    const expected = {
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [],
      name: 'Mildred LeStrange',
      quote: 'A slice of Pumperknickle a day keeps the doctor away',
      rating: 'generally appealing',
      errMsg: 'dang flabbit!'
    }
  
    expect(wrapper.state()).toBe({
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [],
      name: '',
      quote: '',
      rating: '',
      errMsg: ''
    });
    wrapper.instance().updateAppState('Mildred LeStrange', 'A slice of Pumperknickle a day keeps the doctor away', 'generally appealing');
    expect(wrapper.state()).toEqual(expected)
  });

  it('should be able to update state by favoriting a card', () => {
    expect(wrapper.state('favoriteCards')).toEqual([])
    wrapper.instance().updateFavoriteCard('Ginny Weasley')
    expect(wrapper.state('favoriteCards').length).toEqual(1)
  });

  it('should be able to update state with character data', () => {
    expect(wrapper.state('characterData')).toEqual([])
    wrapper.instance().setCharacters(['billy', 'bobbyAnn'])
    expect(wrapper.state('characterData').length).toEqual(2)
  });

  it('should be able to update state with movie data ', () => {
    expect(wrapper.state('movieData')).toEqual([])
    wrapper.instance().setMovie(['the land before time', 'the land before time ii'])
    expect(wrapper.state('movieData').length).toEqual(2)

  });

  it('should be able to update state with planet data ', () => {
    expect(wrapper.state('planetData')).toEqual([])
    wrapper.instance().setPlanets(['pluto', 'mercury'])
    expect(wrapper.state('planetData').length).toEqual(2)

  });

});
