'use client';
import React from 'react';
import styles from './BookmarkedMovies.module.scss';
import { InfoProps } from '@/utils/getData';
import Thumbnail from '../thumbnail/Thumbnail';
import { useAppContext } from '@/app/store/AppContext';

export default function BookmarkedMovies() {
  const { setMoviesData, moviesData } = useAppContext();

  const bookmarkedMovies = moviesData.filter(
    (item) => item.isBookmarked === true && item.category === 'Movie'
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
      {!bookmarkedMovies.length ? (
        <p>No bookmarked movies.</p>
      ) : (
        bookmarkedMovies.map((item) => (
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
