import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Gallery = (props) => {

  const title = 'Today\'s Hottest Deals';
  const subtitle = 'Checkout the most popular cars in stock today';

  return (
    <div className='gallery'>
      <div className='gallery__title'>{title}</div>
      <div className='gallery__subtitle'>{subtitle}</div>
      <div>
        {props.items.map((item, i) => {
          return <GlleryItem key={i}/>
        })}
      </div>
    </div>
  );

}

export default Gallery;
