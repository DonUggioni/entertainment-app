'use client';

import React, { createContext, useContext, useState } from 'react';
import data from '../../data.json';

const AppContext = createContext<{
  moviesData: InfoProps[];
  setMoviesData: React.Dispatch<React.SetStateAction<InfoProps[]>>;
  searchParams: string;
  setSearchParams: React.Dispatch<React.SetStateAction<string>>;
}>({
  moviesData: [],
  setMoviesData: () => {},
  searchParams: '',
  setSearchParams: () => '',
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
  const [searchParams, setSearchParams] = useState('');

  const values = {
    moviesData,
    setMoviesData,
    searchParams,
    setSearchParams,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
