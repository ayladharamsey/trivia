import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<UserProfile 
      name = 'Ayla'
      quote = 'She likes toast'
      rating = 'master'
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});