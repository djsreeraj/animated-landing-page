import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppState = {
  showCursor: boolean;
  cursorType: string;
  setShowCursor: (show: boolean) => void;
  setCursorType: (type: string) => void;
};

const defaultState: AppState = {
  showCursor: true,
  cursorType: 'normal',
  setShowCursor: () => {},
  setCursorType: () => {}
};

const AppContext = createContext<AppState>(defaultState);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [cursorType, setCursorType] = useState<string>('normal');

  const value = {
    showCursor,
    cursorType,
    setShowCursor,
    setCursorType
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the app context
export const useAppContext = () => useContext(AppContext);
