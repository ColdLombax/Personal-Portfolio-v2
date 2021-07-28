import React, { useState } from 'react';

import { Nav, NavList, NavItem } from './NavbarElements';

export default function Navbar() {
  const [value, setValue] = useState(0);
  return (
    <Nav>
      <NavList>
        <NavItem
          isActive={value === 0}
          onClick={() => {
            setValue(0);
          }}
        >
          ABOUT
        </NavItem>
        <NavItem
          isActive={value === 1}
          onClick={() => {
            setValue(1);
          }}
        >
          PROJECTS
        </NavItem>
        <NavItem
          isActive={value === 2}
          onClick={() => {
            setValue(2);
          }}
        >
          EXPERIENCE
        </NavItem>
      </NavList>
    </Nav>
  );
}

// when a value changes, determine whether
