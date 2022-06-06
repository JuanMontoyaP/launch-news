import React, { useState, createContext, useMemo } from 'react';
import propTypes from 'prop-types';

const HomeContext = createContext();

export default HomeContext;

export function HomeProvider({ children }) {
  const [start, setStart] = useState(0);

  const contextData = useMemo(() => ({
    start,
    setStart,
  }), [start]);

  return (
    <HomeContext.Provider value={contextData}>
      {children}
    </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  children: propTypes.node.isRequired,
};
