import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Button = (props) => {

  return (
    <button className={`button button--${props.color || ''}`}>{props.children}</button>
  );
}

export default Button;
