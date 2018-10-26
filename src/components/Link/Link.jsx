import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Link = (props) => {

  const classes = `
    link
    ${props.underlineOnHover ? 'link--growing-underline' : ''}
    link--${props.color}
    link--hover-${props.hoverColor}
  `;

  return (
    <span
      className={classes}
      onClick={() => console.log(props.value)}>
      {props.children}
    </span>
  );
};

Link.defaultProps = {
  color: 'white',
};

Link.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(['green', 'white']),
  hoverColor: PropTypes.oneOf(['green', 'orange']),
  underlineOnHover: PropTypes.bool,
  value: PropTypes.string,
};

export default Link;
