import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TipItem = (props) => {

  const {imageUrl, title} = props;

  return (
    <div className='tip-item'>
      <div className='tip-item__image'>
        <img src={imageUrl} alt=""/>
        <p className='tip-item__title'>{title}</p>
      </div>
    </div>
  );

};

TipItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default TipItem;
