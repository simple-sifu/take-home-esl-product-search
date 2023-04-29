import React, { createContext, useContext, useState } from "react";

// Create a new context object
const SearchBarContext = createContext();

// Create a custom hook to access the SearchBarContext
export const useSearchBar = () => {
  return useContext(SearchBarContext);
};

// Define a SearchBarProvider component to wrap around the rest of your app
export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Pass the state and methods to update the state down to the children components
  return (
    <SearchBarContext.Provider value={{ count, increment, decrement }}>
      {children}
    </SearchBarContext.Provider>
  );
};

// // A component that displays the current count
// const SearchBarDisplay = () => {
//   const { count } = useSearchBar();

//   return <h1>{count}</h1>;
// };

// // A component that provides buttons to increment and decrement the count
// const SearchBarControls = () => {
//   const { increment, decrement } = useSearchBar();

//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// The main app component
// const App = () => {
//   return (
//     <SearchBarProvider>
//       <SearchBarDisplay />
//       <SearchBarControls />
//     </SearchBarProvider>
//   );
// };

// export default App;
