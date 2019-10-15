import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Functionality ', () => {
  let wrapper, signOut, updateAppState; 

  beforeEach(() => {
    wrapper = shallow(<App />);
    signOut = jest.fn()
    updateAppState = jest.fn();

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty state initially', () => {
    expect(wrapper.state()).toEqual({
      movieData: [],
      characterData: [],
      planetData: [],
      favoriteCards: [1, 2],
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
      favoriteCards: [1, 2],
      name: '',
      quote: '',
      rating: '',
      errMsg: ''
    });
  });

  it('should be able update the state with the users info', () => {
    wrapper.setState({
      name: 'Mildred LeStrange',
      quote: 'A slice of Pumperknickle a day keeps the doctor away',
      rating: 'generally appealing',
      errMsg: 'dang flabbit!'
    });
    wrapper.instance().updateAppState('Mildred LeStrange', 'A slice of Pumperknickle a day keeps the doctor away', 'generally appealing');
    expect(wrapper.state()).toEqual({
      name: 'Mildred LeStrange',
      quote: 'A slice of Pumperknickle a day keeps the doctor away',
      rating: 'generally appealing',
      errMsg: 'dang flabbit!'
    })
  });

  it('should be able to update state by favoriting a card', () => {

  });

  it('should be able to update state with  character data', () => {

  });

  it('should be able to update state with movie data ', () => {

  });

  it('should be able to update state with planet data ', () => {

  });

});
