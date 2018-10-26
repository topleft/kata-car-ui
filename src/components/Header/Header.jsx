import React from 'react';
import './styles.scss';
import Link from '../Link';
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
    };
  }

  renderNavItems() {
    return this.listItems.map((item, i) => {
      return (
        <span key={i}>
          <li>
            <Link
              underlineOnHover={!this.state.mobileMenuOpen}
              hoverColor={this.state.mobileMenuOpen ? 'orange' : null}
              value={item}>{item}</Link>
          </li>
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
                <Button color='green' handleClick={() => console.log('clicked SIGN UP')}>Sign Up</Button>
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
              <span className='highlight'>
                <li>
                  <Link
                    color='green'
                    hoverColor='orange'
                    value={'Sign Up'}>Sign Up</Link>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
