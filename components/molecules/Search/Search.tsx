import React, { ChangeEvent } from 'react';
import { useSearch } from '../../../context/SearchContext';
import Input from '../../atoms/Input/Input';

const Search = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search"
    />
  );
};

export default Search;
