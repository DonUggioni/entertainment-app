'use client';

import React from 'react';
import { InfoProps, useAppContext } from '@/app/store/AppContext';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from './SeriesThumbnailsContainer.module.scss';

export default function SeriesThumbnailsContainer() {
  const { moviesData, setMoviesData } = useAppContext();
  const tvSeries = moviesData.filter((item) => item.category === 'TV Series');

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
      {tvSeries.map((item) => (
        <Thumbnail
          onClick={() => bookmarkHandler(item)}
          items={item}
          key={item.title}
        />
      ))}
    </div>
  );
}
