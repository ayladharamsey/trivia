import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav 
      name='Ayla'
      quote='Shes pretty stellar'
      rating='master'
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});