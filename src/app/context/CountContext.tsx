"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CountContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

export const CountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextProps => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
