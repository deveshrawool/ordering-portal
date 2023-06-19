import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          AT
        </LogoContainer>
        <NavLinks>
          <NavLink to='/'>Dashboard</NavLink>
          <NavLink to='/'>All Products</NavLink>
          <NavLink to='/'>Orders</NavLink>
          <NavLink to='/'>Favorites</NavLink>
          <NavLink to='/'>New Arrivals</NavLink>
        </NavLinks>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;
