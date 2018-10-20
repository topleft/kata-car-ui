import React from 'react';
import Header from '../Header';
import CenterPiece from '../CenterPiece';
import GalleryContainer from '../GalleryContainer';
import './styles.scss';
import TipsContainer from '../TipsContainer';
import MailingListContainer from '../MailingListContainer';
import Footer from '../Footer';

const centerPieceTitle = 'Find Your Dream Car';
const centerPieceSubtitle = 'Search over 20,000 pre-approved used cars and find your perfect vehicle today';
const footerTitle = 'DreamCars';
const footerListItems = ['Search Cars', 'Buyer Tips', 'Finance'];

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className='content'>
          <div className='backdrop' />
          <Header/>
          <CenterPiece
            title={centerPieceTitle}
            subtitle={centerPieceSubtitle} />
          <GalleryContainer/>
          <TipsContainer/>
          <MailingListContainer/>
          <Footer title={footerTitle} listItems={footerListItems}/>
        </div>
      </div>
    );
  }
}

export default Content;

