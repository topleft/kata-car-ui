import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import GalleryItem from '../GalleryItem';
import SectionTitle from '../SectionTitle';
import Button from '../Button';

const Gallery = (props) => {

  return (
    <div className='deals-section'>
      <SectionTitle
        title={'Today\'s Hottest Deals'}
        subtitle={'Checkout the most popular cars in stock today'}/>
      <div className='gallery'>
        <div className='gallery__items'>
          {props.items.map((item, i) => {
            return <GalleryItem key={i} {...item}/>;
          })}
        </div>
      </div>
      <div style={{margin: 'auto', width: '100%', textAlign: 'center'}}>
        <Button color={'orange'} handleClick={() => console.log('clicked: MORE DEALS')}>MORE DEALS</Button>
      </div>
    </div>
  );

};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
  }))
};

export default Gallery;
