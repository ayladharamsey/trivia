import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './HeaderContainer';
import { isJSXEmptyExpression } from '@babel/types';

describe('HeaderContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderContainer 
      name = 'Ayla'
      quote =  'she is an an average human'
      rating = 'master'
      signOut = {jest.fn()}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});