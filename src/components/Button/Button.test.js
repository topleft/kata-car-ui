import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders with crashing', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('applies the color prop as a class', () => {
    const wrapper = shallow(<Button color='green'/>);
    expect(wrapper.hasClass('button--green')).toBe(true);
    wrapper.setProps({color: 'pink'});
    expect(wrapper.hasClass('button--pink')).toBe(true);
  });

  it('calls the handleClick prop when clicked', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<Button handleClick={clickFunc}/>);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled;
  });
});
