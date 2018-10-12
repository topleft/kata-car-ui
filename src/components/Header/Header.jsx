import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Button from '../Button';


class Header extends React.Component {
  listItems = [
    'Search Cars',
    'Buyers Tips',
    'Finance',
    'Sign In',
  ]

  title = 'DreamCars'

  constructor() {
    super();
    this.state = {
      mobileMenuOpen: false,
    }
  }

  renderNavItems() {
    return this.listItems.map((item, i) => {
      return (
        <span key={i}>
          <li onClick={() => console.log(item)}>{item}</li>
          <div></div>
        </span>
      );
    });
  }

  render() {
    return (
      <div>
        <header className='header'>
          <button
            className='header__mobile-menu-toggle'
            onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})}>
          </button>
          <div className='header__title'>{this.title}</div>
          <ul>
            {this.renderNavItems()}
            <span>
              <li>
                <Button color='green' handleClick={() => console.log('clicked the header')}>Sign Up</Button>
              </li>
            </span>
          </ul>
        </header>
        <div
          className={`mobile-menu ${this.state.mobileMenuOpen ? 'open' : ''}`}
          onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})}>
          <div className={'mobile-menu__list'}>
            <ul>
              {this.renderNavItems()}
              <li className='highlight'>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
