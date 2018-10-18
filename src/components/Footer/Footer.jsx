import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer__title'>{props.title}</div>
      <ul className='footer__list'>
        {props.listItems.map((item, i) => <li key={i} onClick={() => console.log(item)}>{item}</li>)}
      </ul>
    </footer>
  );
};


Footer.propTypes = {
  listItems: PropTypes.array,
  title: PropTypes.string
};

export default Footer;
