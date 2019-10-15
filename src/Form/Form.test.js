import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper, mockEvent; 

  beforeEach(() => {
    wrapper = shallow(<Form updateAppState = {jest.fn()}/>) 
    mockEvent = {target: { name: 'name', value: 'Ayla'}}
  });

  it('should match the snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      quote: '',
      rating: 'Select Rating'
    })
  });

  it('should update state with name when handleChange fires', () => {
    expect(wrapper.state('name')).toEqual('');
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('Ayla')
  });

  it('should be able to fire handleChange on keypress', () => {
    wrapper.instance().handleChange =jest.fn();
    wrapper.instance().forceUpdate();

    wrapper.find('.name-input').simulate('change', mockEvent)
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
  });

  it('should run handleSubmit upon button click', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should call on updateAppState when handleSubmit runs', () => {
    const currentState = { name: 'Ayla', quote: 'If you aint talking money I dont wanna talk', rating: 'Pauper' };
    const mockPerson = {
      name: 'Ayla',
      quote: 'If you aint talking money I dont wanna talk',
      rating: 'Pauper'
    }


    wrapper.instance().setState(currentState)
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(wrapper.instance().props.updateAppState).toHaveBeenCalledWith(mockPerson);
  });

});