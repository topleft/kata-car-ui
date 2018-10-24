import React from 'react';
import Gallery from '../Gallery';
import CarApi from '../../utils/CarApi';

class GalleryContainer extends React.Component {
  state = {
    deals: []
  }

  componentDidMount() {
    this.getDeals();
  }

  getDeals() {
    CarApi.getDeals()
      .then((deals) => this.setState({deals}));
  }

  render() {

    const {deals} = this.state;

    return (
      <div>
        <Gallery items={deals}/>
      </div>
    );
  }
}

export default GalleryContainer;
