import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import GalleryItem from '../GalleryItem';

const Gallery = (props) => {

  const title = 'Today\'s Hottest Deals';
  const subtitle = 'Checkout the most popular cars in stock today';

  return (
    <div className='gallery'>
      <div className='gallery__items'>
        {props.items.map((item, i) => {
          return <GalleryItem key={i} {...item}/>;
        })}
      </div>
    </div>
  );

};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
  }))
}

export default Gallery;
