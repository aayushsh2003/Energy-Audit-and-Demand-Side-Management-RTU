import React, { createContext, useContext } from 'react';

interface NavigationContextType {
  activeUnit: number | null;
  setActiveUnit: (unit: number | null) => void;
  unitsCount: number;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ 
  children, 
  activeUnit, 
  setActiveUnit, 
  unitsCount 
}: { 
  children: React.ReactNode;
  activeUnit: number | null;
  setActiveUnit: (unit: number | null) => void;
  unitsCount: number;
}) => {
  return (
    <NavigationContext.Provider value={{ activeUnit, setActiveUnit, unitsCount }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    // Return a dummy object if used outside provider to avoid crashes, 
    // but in our app it should always be inside.
    return { activeUnit: null, setActiveUnit: () => {}, unitsCount: 0 };
  }
  return context;
};
