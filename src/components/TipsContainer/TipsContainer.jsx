import React from 'react';
import Tips from '../Tips';
import CarApi from '../../utils/CarApi';

class TipsContainer extends React.Component {
  state = {
    tips: [],
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getTips();
  }

  getTips() {
    CarApi.getTips()
      .then((tips) => this.setState({tips}))
      .catch(console.error);
  }

  render() {
    const {tips} = this.state;

    return (
      <Tips items={tips}/>
    );
  }
}

export default TipsContainer;
