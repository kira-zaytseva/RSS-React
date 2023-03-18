import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from '../../router/routes';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <span>1</span>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li>
            <NavLink
              to={Route.MAIN}
              className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav__link')}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to={Route.ABOUT}
              className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav__link')}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
