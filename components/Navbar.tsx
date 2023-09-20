import { NavHeader, NavLogo, NavbarContainer, NavbarWrapper } from '@/styles/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <NavLogo></NavLogo>
            <NavHeader>Skyswyp</NavHeader>
        </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;