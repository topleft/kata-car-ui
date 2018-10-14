import React from 'react';
import PropTypes from 'prop-types';
import TipItem from '../TipItem';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import './styles.scss';

const Tips = (props) => {

  return (
    <div className={'tips-section'}>
      <SectionTitle
        title={'Our Top Buying Tips'}
        subtitle={'Ensure you make the right choice buying a car'}/>
      <div className='tips'>
        <div className='tips__items'>
          {props.items.map((item, i) => {
            return <TipItem key={i} {...item}/>;
          })}
        </div>
      </div>
      <div style={{margin: 'auto', width: '100%', textAlign: 'center'}}>
        <Button color={'orange'} handleClick={() => console.log('clicked: MORE GUIDES')}>MORE GUIDES</Button>
      </div>
    </div>
  );

};

Tips.propTypes = {
  items: PropTypes.object
};

export default Tips;
