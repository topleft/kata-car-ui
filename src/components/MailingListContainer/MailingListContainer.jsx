import React from 'react';
import MailingList from '../MailingList';

class MailingListContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      emailAddress: ''
    };
  }

  getInputs() {
    const inputs = [
      {
        name: 'emailAddress',
        type: 'text',
        value: this.state.emailAddress,
        placeholder: 'Enter your email address...',
        handleChange: (e) => this.setState({emailAddress: e.target.value}),
        width: '100%',
      }
    ];
    return inputs;
  }

  handleSubmit() {
    console.log(`SUBMIT: ${JSON.stringify(this.state)}`);
  }

  render() {
    const inputs = this.getInputs();
    return <MailingList
      inputs={inputs}
      handleSubmit={
        () => this.handleSubmit()
      }/>;
  }
}

export default MailingListContainer;
