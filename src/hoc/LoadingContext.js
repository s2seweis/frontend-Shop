import React, { createContext, useState, useContext } from 'react';

// Create a context for loading state
const LoadingContext = createContext();

// Provider component to wrap your app and provide loading state
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);
