import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Functionality ', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty state initially', () => {

  });

  it('should be able to sign out of the application', () => {

  });

  it('should be able update the name, quote, and rating when the form is filled out', () => {

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
