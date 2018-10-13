import React from 'react';
import Gallery from '../Gallery';
import car1 from '../../static/focus.png';
import car2 from '../../static/skoda.png';
import car3 from '../../static/civic.png';
import car4 from '../../static/corsa.png';
import car5 from '../../static/clio.png';
import car6 from '../../static/polo.png';
import car7 from '../../static/ibiza.png';
import car8 from '../../static/i5.png';


class GalleryContainer extends React.Component {

  getCars() {
    return [
      {title: 'Title', imageUrl: car1, tagText: '$18,000'},
      {title: 'Title', imageUrl: car2, tagText: '$18,000'},
      {title: 'Title', imageUrl: car3, tagText: '$18,000'},
      {title: 'Title', imageUrl: car4, tagText: '$18,000'},
      {title: 'Title', imageUrl: car5, tagText: '$18,000'},
      {title: 'Title', imageUrl: car6, tagText: '$18,000'},
      {title: 'Title', imageUrl: car7, tagText: '$18,000'},
      {title: 'Title', imageUrl: car8, tagText: '$18,000'}
    ];
  }

  render() {
    return <Gallery items={this.getCars()}/>;
  }
}

export default GalleryContainer;
