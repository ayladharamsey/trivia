import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper, object, mockData

  beforeEach(() => {

    object = {
      characters: ['url.com', 'url.com', 'url.com'],
      episode_id: 1,
      opening_crawl: 'scrawl the page with an intro',
      planets: ['url.com', 'url.com', 'url.com'],
      release_date: "2002-05-16",
      species: ['url.com', 'url.com', 'url.com'],
      title: 'starwars'
    }
    
    mockData = [object, object, object]
    
    wrapper = shallow(<Container movieData={mockData}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});