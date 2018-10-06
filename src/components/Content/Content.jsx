import React from 'react';
import Header from '../Header';
import './styles.scss';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='content__img'></div>
        <div className='content'></div>
      </div>
    );
  }
}

export default Content;

