import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


class Header extends React.Component {
  listItems = [
    'Search Cars',
    'Buyers Tips',
    'Finance',
    'Sign In',

  ]

  constructor() {
    super();
  }

  render() {
    return (
      <header className='header'>
        <div className='header__navigation'>
          <label htmlFor="hamburger" className='header__navigation__hamburger'>
            <input id='hamburger' type="checkbox"/>
            <div className='header__navigation__menu'>
              <ul className='header__navigation__menu__list'>
                {this.listItems.map((item, i) => <li key={i}>{item}</li>)}

              </ul>
            </div>
          </label>
        </div>
      </header>
    );
  }
}

export default Header;
