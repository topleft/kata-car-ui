import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Button = (props) => {

  return (
    <button
      className={`button button--${props.color || ''}`}
      onClick={(e) => props.handleClick(e)}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
