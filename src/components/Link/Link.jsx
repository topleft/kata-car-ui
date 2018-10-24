import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Link = (props) => {
  return (
    <span
      className={`link ${props.underlineOnHover ? 'link--growing-underline' : ''}`}
      onClick={() => console.log(props.value)}>
      {props.children}
    </span>
  );
};

Link.propTypes = {
  children: PropTypes.string,
  underlineOnHover: PropTypes.bool,
  value: PropTypes.string,
};

export default Link;
