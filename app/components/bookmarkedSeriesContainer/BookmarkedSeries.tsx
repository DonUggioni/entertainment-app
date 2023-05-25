'use client';
import React from 'react';
import styles from './BookmarkedSeries.module.scss';
import { InfoProps } from '@/utils/getData';
import Thumbnail from '../thumbnail/Thumbnail';
import { useAppContext } from '@/app/store/AppContext';

export default function BookmarkedSeries() {
  const { setMoviesData, moviesData } = useAppContext();

  const bookmarkedTvSeries = moviesData.filter(
    (item) => item.isBookmarked === true && item.category === 'TV Series'
  );

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
    <div className={`${styles.thumbnailsContainer} ${styles.marginBottom}`}>
      {!bookmarkedTvSeries.length ? (
        <p>No bookmarked TV Series.</p>
      ) : (
        bookmarkedTvSeries.map((item) => (
          <Thumbnail
            onClick={() => bookmarkHandler(item)}
            items={item}
            key={item.title}
          />
        ))
      )}
    </div>
  );
}
