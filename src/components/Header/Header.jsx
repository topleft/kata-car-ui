import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className='header'>
        <div className='header__navigation'>
          <label htmlFor="hamburger" className='hamburger'>
            <input id='hamburger' type="checkbox"/>
            <div className='menu'>
              <ul className='menu__list'>
                <li>wow</li>
                <li>wow</li>
                <li>wow</li>
                <li>wow</li>
              </ul>
            </div>
          </label>
        </div>
      </header>
    );
  }
}

export default Header;
