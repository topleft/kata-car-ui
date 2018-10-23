import React from 'react';
import {shallow, mount} from 'enzyme';
import InlineForm from './InlineForm';

describe('InlineForm', () => {

  it('renders with crashing', () => {
    const wrapper = shallow(<InlineForm inputs={[]}/>);
    expect(wrapper.exists());
  });

  it('renders a button', () => {
    const wrapper = shallow(<InlineForm inputs={[]} buttonText={'test'}/>);
    expect(wrapper.find('Button').exists()).toBe(true);
  });

  it('renders inputs', () => {
    const wrapper = shallow(<InlineForm inputs={[{}, {}]}/>);
    expect(wrapper.find('input').length).toBe(2);
  });

  it('calls handleChange prop when input is updated', () => {
    const changeFunc = jest.fn();
    const wrapper = shallow(<InlineForm inputs={[{handleChange: changeFunc}]}/>);
    const input = wrapper.find('input');
    input.simulate('change');
    expect(changeFunc).toHaveBeenCalled();
  });

  it('renders inputs with width props if match prop is true', () => {
    const wrapper = shallow(<InlineForm inputs={[{width: '40%'}]} match={true}/>);
    const width = wrapper.instance().getInputWidth('40%');
    expect(width).toEqual({width: '40%'});
  });

  it('renders inputs with no width props if match prop is false', () => {
    const wrapper = shallow(<InlineForm inputs={[{width: '40%'}]} match={false}/>);
    const width = wrapper.instance().getInputWidth('40%');
    expect(width).toEqual(null);
  });

  it('calls handleSubmit prop when button is clicked', () => {
    const submitFunc = jest.fn();
    const wrapper = mount(<InlineForm inputs={[]} handleSubmit={submitFunc}/>);
    const input = wrapper.find('Button');
    input.simulate('click');
    expect(submitFunc).toHaveBeenCalled();
  });

});

