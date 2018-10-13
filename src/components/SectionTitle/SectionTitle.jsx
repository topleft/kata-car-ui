import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SectionTitle = (props) => {

  const {title, subtitle} = props;

  return (
    <div className='section-title'>
      <div className='section-title__title'>{title}</div>
      <div className='section-title__subtitle'>{subtitle}</div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
