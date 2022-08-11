import Link from 'next/link';
import React from 'react';
import GithubIcon from '../../atoms/icons/GithubIcon';
import { NavStyled } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavStyled>
      <Link href="/">
        <a>
          <GithubIcon />
        </a>
      </Link>
      {/* TODO -> place a proper input here */}
      <input type="text" />
    </NavStyled>
  );
};

export default Navbar;
