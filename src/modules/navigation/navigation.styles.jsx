
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
width: 100%;
  height: 80vh;
  width: fit-content;
  position: relative;
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  min-width: 80%;
  padding: 5px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
