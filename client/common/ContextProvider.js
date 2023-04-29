import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const ContextProvider = ({ children }) => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);

  function toggleSearchContainer() {
    setSearchValue("");
    setShowingSearch(() => !showingSearch);
  }

  return (
    <SearchContext.Provider
      value={{
        showingSearch,
        setShowingSearch,
        searchValue,
        toggleSearchContainer,
        isSearchBarEmpty,
        setIsSearchBarEmpty,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
