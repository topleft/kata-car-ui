import React from 'react';
import Tips from '../Tips';

import tip1 from '../../static/tip1.png';
import tip2 from '../../static/tip2.png';
import tip3 from '../../static/tip3.png';

class TipsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getTips() {
    return [
      {imageUrl: tip1, title: 'Our Buyers Check List'},
      {imageUrl: tip2, title: 'How To Spot a Fraud'},
      {imageUrl: tip3, title: 'Best Used Cars 2018'},
    ];
  }

  render() {
    return (
      <Tips items={this.getTips()}/>
    );
  }
}

export default TipsContainer;
