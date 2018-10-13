import React from 'react';
import Gallery from '../Gallery';

class GalleryContainer extends React.Component {

  getCars() {
    return [
      {},
      {},
      {},
      {}
    ];
  }

  render() {
    return <Gallery items={this.getCars()}/>;
  }
}

export default GalleryContainer;
