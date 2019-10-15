import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper, object ;
  beforeEach(() => {
    
    object = {
      id: 1,
      title: 'starwars',
      episode: 1,
      release_year: "2002",
      characters: ['url.com', 'url.com', 'url.com'],
    }

    wrapper = shallow(<MovieCard 
      id={object.id}
      episode_id={object.episode_id}
      release_year={object.release_year}
      title={object.title}
      characters={object.characters}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});