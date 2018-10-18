import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SectionTitle = (props) => {

  const {title, subtitle, color} = props;

  return (
    <div className='section-title'>
      <div className={`section-title__title ${color == 'white' ? 'section-title__title--white' : '' }`}>{title}</div>
      <div className={`section-title__subtitle ${color == 'white' ? 'section-title__subtitle--white' : '' }`}>{subtitle}</div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
