'use client';

import { getData } from '@/utils/getData';
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
  screenWidth: 0,
  moviesData: {},
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
  const [moviesData, setMoviesData] = useState({});

  console.log(moviesData);

  async function getMoviesData() {
    const moviesArr: InfoProps[] = [];
    try {
      const data = await getData();
      if (data) {
        data.map((item) => moviesArr.push(item));
      }
      setMoviesData(moviesArr);
    } catch (error) {
      console.log(error);
    }
  }

  function getWindowWidth() {
    const width = window.innerWidth;
    setScreenWidth(width);
  }

  useEffect(() => {
    getMoviesData();
    getWindowWidth();
  }, []);

  const values = {
    screenWidth,
    moviesData,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
