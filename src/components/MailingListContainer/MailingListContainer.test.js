import React from 'react';
import {shallow, render, mount} from 'enzyme';
import MailingListContainer from './MailingListContainer';

describe('MailingListContainer', () => {
  it('should contain a MailingList component', () => {
    const wrapper = shallow(<MailingListContainer/>);
    expect(wrapper.find('MailingList').exists()).toBe(true);
  });

  it('should setState when input changes', () => {
    const wrapper = mount(<MailingListContainer/>);
    const input = wrapper.find('input');
    expect(wrapper.state()).toEqual({emailAddress: ''});
    input.simulate('change', { target: { value: 'Text' } });
    expect(wrapper.state()).toEqual({emailAddress: 'Text'});
  });

  it('should setState when input changes', () => {
    const wrapper = shallow(<MailingListContainer/>);
    // console.log(wrapper.instance().handleSubmit())
    // const handleSubmitSpy = jest.spyOn()
    // const button = wrapper.find('button');
    // button.simulate('click')
  });
});
