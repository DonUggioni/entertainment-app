import React from 'react';
import styles from './MoviesCategory.module.scss';
import HeadingLarge from '../../components/typography/headings/heading-L/HeadingLarge';
import MoviesThumbnailsContainer from '../../components/moviesThumbnailsContainer/MoviesThumbnailsContainer';

export default async function MoviesCategory() {
  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>Movies</HeadingLarge>
      <MoviesThumbnailsContainer />
    </section>
  );
}
