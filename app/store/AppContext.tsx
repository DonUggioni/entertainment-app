'use client';

import { getData } from '@/utils/getData';
import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  title: '',
  thumbnail: {},
  year: '',
  category: '',
  rating: '',
  isBookmarked: true || false,
  isTrending: true || false,
  screenWidth: 0,
};

const AppContext = createContext({
  screenWidth: 0,
});

export type Thumbnail = {
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

export interface InfoProps {
  title: string;
  thumbnail: Thumbnail;
  year: string;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
}

export function AppContextProvider({ children }: { children: any }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const values = {
    screenWidth,
    // moviesData,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
