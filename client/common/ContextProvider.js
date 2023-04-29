import React, { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Create a new context object
const SearchContext = createContext();

// Create a custom hook to access the SearchBarContext
export const useSearch = () => {
  return useContext(SearchContext);
};

// Define a SearchBarProvider component to wrap around the rest of your app
export const ContextProvider = ({ children }) => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);

  const navigate = useNavigate();

  function toggleSearchContainer() {
    setSearchValue("");
    setShowingSearch(() => !showingSearch);
  }

  function hideSearchContainer() {
    setSearchValue("");
    setShowingSearch(false);
  }


  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleSearchContainer();
      navigate("/display");
    }
  }

  // Pass the state and methods to update the state down to the children components
  return (
    <SearchContext.Provider
      value={{
        showingSearch,
        searchValue,
        toggleSearchContainer,
        hideSearchContainer,
        isSearchBarEmpty,
        setIsSearchBarEmpty,
        handleKeyDown,
        setSearchValue
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
