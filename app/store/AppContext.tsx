'use client';

import React, { createContext, useContext, useState } from 'react';
import data from '../../data.json';

const AppContext = createContext<{
  moviesData: InfoProps[];
  setMoviesData: React.Dispatch<React.SetStateAction<InfoProps[]>>;
}>({
  moviesData: [],
  setMoviesData: () => {},
});

export interface InfoProps {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: string | number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
}

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [moviesData, setMoviesData] = useState<InfoProps[]>(data);

  console.log(moviesData);

  const values = {
    moviesData,
    setMoviesData,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
