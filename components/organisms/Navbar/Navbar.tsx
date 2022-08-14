import Link from 'next/link';
import React from 'react';
import GithubIcon from '../../atoms/Icons/GithubIcon';
import Search from '../../molecules/Search/Search';
import { NavStyled, SearchWrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavStyled>
      <Link href="/" aria-label="Home page">
        <a>
          <GithubIcon />
        </a>
      </Link>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </NavStyled>
  );
};

export default Navbar;
