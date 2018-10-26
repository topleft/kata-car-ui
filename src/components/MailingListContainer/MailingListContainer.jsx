import React from 'react';
import MailingList from '../MailingList';

class MailingListContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      emailAddress: ''
    };
  }

  get inputs() {
    return [
      {
        name: 'emailAddress',
        type: 'text',
        value: this.state.emailAddress,
        placeholder: 'Enter your email address...',
        handleChange: (e) => this.setState({emailAddress: e.target.value}),
        width: '100%',
      }
    ];
  }

  handleSubmit() {
    console.log(`SUBMIT: ${JSON.stringify(this.state)}`);
  }

  render() {
    return <MailingList
      inputs={this.inputs}
      handleSubmit={
        () => this.handleSubmit()
      }/>;
  }
}

export default MailingListContainer;
