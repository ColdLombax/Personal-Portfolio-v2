import React from 'react';
import { Nav, NavList, NavItem } from './NavbarElements';

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>ABOUT</NavItem>
        <NavItem>PROJECTS</NavItem>
        <NavItem>EXPERIENCE</NavItem>
      </NavList>
    </Nav>
  );
}
