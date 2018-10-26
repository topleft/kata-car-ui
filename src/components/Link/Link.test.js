import React from 'react';
import {shallow} from 'enzyme';
import Link from './Link';

describe('Link', () => {
  it('renders with crashing', () => {
    const wrapper = shallow(<Link/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('the color class is default white', () => {
    const wrapper = shallow(<Link/>);
    expect(wrapper.hasClass('link--white')).toBe(true);
  });

  it('applies the color prop as a class', () => {
    const wrapper = shallow(<Link color='green'/>);
    console.log(wrapper.debug())
    expect(wrapper.hasClass('link--green')).toBe(true);
  });

  it('applies the hoverColor prop as a class', () => {
    const wrapper = shallow(<Link hoverColor='orange'/>);
    expect(wrapper.hasClass('link--hover-orange')).toBe(true);
  });

  it('applies the underlineOnHover prop as a class', () => {
    const wrapper = shallow(<Link underlineOnHover/>);
    expect(wrapper.hasClass('link--growing-underline')).toBe(true);
  });

  it('renders the children prop', () => {
    const expected = 'link text';
    const wrapper = shallow(<Link>{expected}</Link>);
    expect(wrapper.text()).toEqual(expected);
  });
});
