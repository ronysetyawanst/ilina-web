'use client';
import { createContext, useContext } from 'react';

const LocalizationContext = createContext(null);

export const LocalizationProvider = ({ children, messages, locale }) => {
  return (
    <LocalizationContext.Provider value={{ messages, locale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};