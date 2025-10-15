'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AkademikHoverContextType {
  isAkademikHovered: boolean;
  setIsAkademikHovered: (hovered: boolean) => void;
}

const AkademikHoverContext = createContext<
  AkademikHoverContextType | undefined
>(undefined);

export const useAkademikHover = () => {
  const context = useContext(AkademikHoverContext);
  if (context === undefined) {
    throw new Error(
      'useAkademikHover must be used within an AkademikHoverProvider'
    );
  }
  return context;
};

interface AkademikHoverProviderProps {
  children: ReactNode;
}

export const AkademikHoverProvider: React.FC<AkademikHoverProviderProps> = ({
  children,
}) => {
  const [isAkademikHovered, setIsAkademikHovered] = useState(false);

  return (
    <AkademikHoverContext.Provider
      value={{ isAkademikHovered, setIsAkademikHovered }}
    >
      {children}
    </AkademikHoverContext.Provider>
  );
};
