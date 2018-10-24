import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import SectionTitle from '../SectionTitle';
import InlineForm from '../InlineForm';

const MailingList = (props) => {
  return (
    <div className='mailing-list'>
      <div className='mailing-list__background'/>
      <div className='mailing-list__container'>
        <SectionTitle color='white' title='Never Miss a Message' subtitle='Join out exclusive list for one off deal and more'/>
        <InlineForm buttonText={'Sign Me Up'} inputs={props.inputs} handleSubmit={props.handleSubmit}/>
      </div>
    </div>
  );
};

MailingList.propTypes = {
  handleSubmit: PropTypes.func,
  inputs: PropTypes.array,
};

export default MailingList;
