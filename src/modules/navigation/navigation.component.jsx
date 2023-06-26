import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../assets/svgs/dashboard.svg'
import {ReactComponent as AllProducts} from '../../assets/svgs/all-products.svg'
import {ReactComponent as Orders} from '../../assets/svgs/orders.svg'
import {ReactComponent as Favorites} from '../../assets/svgs/heart.svg'
import {ReactComponent as NewArrivals} from '../../assets/svgs/ball.svg'


import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  LogoWrapper,
} from './navigation.styles';
import Logo from '../../assets/images/ATLogo.png'
import { AppContext } from '../../context/AppContext';

const Navigation = () => {
  const {setShowInProgress} = useContext(AppContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <LogoWrapper>
          <img src={Logo} width={"25px"} height={"25px"} alt='logo' />
          AT Inks
          </LogoWrapper>
        </LogoContainer>
        <NavLinks>
          <NavLink onClick={()=>setShowInProgress(true)} to='/'><DashboardIcon width="15px" height="15px" /> Dashboard</NavLink>
          <NavLink to='/'><AllProducts width="15px" height="15px" /> All Products</NavLink>
          <NavLink onClick={()=>setShowInProgress(true)} to='/'><Orders width="15px" height="15px" /> Orders</NavLink>
          <NavLink onClick={()=>setShowInProgress(true)} to='/'><Favorites width="15px" height="15px" /> Favorites</NavLink>
          <NavLink onClick={()=>setShowInProgress(true)} to='/'><NewArrivals width="15px" height="15px" /> New Arrivals</NavLink>
        </NavLinks>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;
