import React from 'react';
import MailingList from '../MailingList';

class MailingListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const inputs = [
      {
        name: 'emailAddress',
        type: 'text',
        value: '',
        placeholder: 'Enter your email address...',
        width: '100%',
      }
    ];
    return <MailingList inputs={inputs} handleSubmit={() => console.log('SUBMIT on the mailinglist')}/>;
  }
}

export default MailingListContainer;
