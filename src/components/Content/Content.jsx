import React from 'react';
import Header from '../Header';
import CenterPiece from '../CenterPiece';
import './styles.scss';

const title = 'Find Your Dream Car';
const subtitle = 'Search over 20,000 pre-approved used cars and find your perfect vehicle today';

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className='content'>
          <div className='backdrop' />
          <Header/>
          <CenterPiece
            title={title}
            subtitle={subtitle} />
        </div>
      </div>
    );
  }
}

export default Content;

