import React from 'react';
import MailingList from '../MailingList';

class MailingListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emailAddress: ''
    };
  }

  render() {
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
    return <MailingList inputs={inputs} handleSubmit={() => console.log('SUBMIT on the mailinglist')}/>;
  }
}

export default MailingListContainer;
