'use client';

import React from 'react';
import styles from './HomeThumbnailsContainer.module.scss';
import Thumbnail from '../thumbnail/Thumbnail';
import { useAppContext } from '@/app/store/AppContext';
import { InfoProps } from '@/utils/getData';

export default function HomeThumbnailsContainer() {
  const { moviesData, setMoviesData } = useAppContext();

  function bookmarkHandler(item: InfoProps) {
    setMoviesData((prevMoviesData) => {
      const updatedMoviesData = prevMoviesData.map((movie) => {
        if (movie === item) {
          return {
            ...movie,
            isBookmarked: !item.isBookmarked,
          };
        }
        return movie;
      });

      return updatedMoviesData;
    });
  }
  return (
    <div className={styles.thumbnailsContainer}>
      {moviesData.map((item) => (
        <Thumbnail
          items={item}
          onClick={() => bookmarkHandler(item)}
          key={item.title}
        />
      ))}
    </div>
  );
}
