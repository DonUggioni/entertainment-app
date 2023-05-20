'use client';

import React from 'react';
import styles from './MoviesThumbnailsContainer.module.scss';
import { InfoProps, useAppContext } from '@/app/store/AppContext';
import Thumbnail from '../thumbnail/Thumbnail';

export default function MoviesThumbnailsContainer() {
  const { moviesData, setMoviesData } = useAppContext();
  const movies = moviesData.filter((item) => item.category === 'Movie');

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
      {movies.map((item) => (
        <Thumbnail
          onClick={() => bookmarkHandler(item)}
          items={item}
          key={item.title}
        />
      ))}
    </div>
  );
}
