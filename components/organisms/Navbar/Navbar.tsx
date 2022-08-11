import Link from 'next/link';
import React from 'react';
import GithubIcon from '../../atoms/icons/GithubIcon';
import Search from '../../molecules/Search/Search';
import { NavStyled, SearchWrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavStyled>
      <Link href="/">
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
