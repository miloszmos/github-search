import React, { ChangeEvent } from 'react';
import Input from '../../atoms/Input/Input';

const Search = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Input
        type="text"
        value={''}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </>
  );
};

export default Search;
