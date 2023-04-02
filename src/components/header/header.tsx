import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from '../../hoc/withRouter/withRouter';
import { pageNames, Route } from '../../router/routes';
import './header.scss';
import { WithRouterProps } from 'hoc/withRouter/types';

const HeaderComponent = ({ location: { pathname } }: WithRouterProps) => {
  return (
    <header className="header" data-testid="Header">
      <span>{pageNames[pathname] || 'Error page'}</span>
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
          <li>
            <NavLink
              to={Route.FORM}
              className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav__link')}
            >
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const Header = withRouter(HeaderComponent);
