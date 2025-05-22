import { createContext } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = (props) => {
  const value = {
    // Add your context values here
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};