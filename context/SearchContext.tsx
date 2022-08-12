import { createContext, PropsWithChildren, useContext, useState } from 'react';

type searchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchContext = createContext<searchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});

export function useSearch() {
  return useContext(SearchContext);
}

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const value = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
