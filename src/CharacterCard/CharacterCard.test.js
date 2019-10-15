import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CharacterCard 
      id = '1'
      name = 'ayla'
      homeworld = 'earth'
      population = '100000'
      species = 'homo sapien'
      favoriteStatus = 'false'
    />)

  });

  it.skip('should start with a default state', () => {
    expect(wrapper.state('isFavorited')).toEqual(false)
  });

  it.skip('should match the snapshot', () => {

  });

  it.skip('should render the name, homeworld, population, species, and other films', () => {

  });

});