import React, { createContext } from 'react';

const HomeContext = createContext();

export default HomeContext;

// eslint-disable-next-line react/prop-types
export function HomeProvider({ children }) {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextData = {
    data: 1,
  };

  return (
    <HomeContext.Provider value={contextData}>
      {children}
    </HomeContext.Provider>
  );
}
