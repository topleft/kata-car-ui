import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Button = (props) => {

  const handleClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    props.handleClick(e);
  }

  return (
    <button
      className={`button button--${props.color || ''}`}
      onClick={(e) => handleClick(e)}>
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
