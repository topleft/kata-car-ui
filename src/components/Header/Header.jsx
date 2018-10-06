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
    this.state = {
      mobileMenuOpen: false,
    }
  }

  render() {
    return (
      <div>
        <header className='header'>
          <button
            className='header__mobile-menu-toggle'
            onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})}>
          </button>
          <div className='header__title'>DreamCars</div>
        </header>
        <div
          className={`mobile-menu ${this.state.mobileMenuOpen ? 'open' : ''}`}
          onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})}>
          <div className={'mobile-menu__list'}>
            <ul>
              {this.listItems.map((item, i) => <li key={i} onClick={() => console.log(item)}>{item}</li>)}
              <li className='highlight'>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
