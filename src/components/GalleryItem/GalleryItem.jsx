import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const GalleryItem = (props) => {

  const {imageUrl, title, tagText} = props;

  return (
    <div className='gallery-item'>
      <div className='gallery-item__image'>
        <img src={imageUrl} alt=""/>
      </div>
      <div className='gallery-item__tag'>{tagText}</div>
      <p className='gallery-item__title'>{title}</p>
    </div>
  );

};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  tagText: PropTypes.string,
};

export default GalleryItem;
