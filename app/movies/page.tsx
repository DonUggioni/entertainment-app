import React from 'react';
import styles from './MoviesCategory.module.scss';
import HeadingLarge from '../components/typography/headings/heading-L/HeadingLarge';
import Thumbnail from '../components/thumbnail/Thumbnail';
import { getData } from '@/utils/getData';

export default async function MoviesCategory() {
  const data = await getData();

  const movies = data.filter((item) => item.category === 'Movie');

  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>Movies</HeadingLarge>
      <div className={styles.thumbnailsContainer}>
        {movies.map((item) => (
          <Thumbnail items={item} />
        ))}
      </div>
    </section>
  );
}
