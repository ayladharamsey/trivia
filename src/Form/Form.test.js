import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Form updateAppState = {jest.fn()}/>) 
  });

  it('should match the snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });


});