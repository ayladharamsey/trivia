import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper, object ;
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

    wrapper = shallow(<MovieCard 
      characters={object.characters}
      episode_id={object.episode_id}
      opening_crawl={object.opening_crawl}
      planets={object.planets}
      release_date={object.release_date}
      species={object.species}
      title={object.title}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});