import React from 'react';
import styles from './Bookmarked.module.scss';
import HeadingLarge from '../components/typography/headings/heading-L/HeadingLarge';
import Thumbnail from '../components/thumbnail/Thumbnail';
import { getData } from '@/utils/getData';

export default async function page() {
  const data = await getData();

  const bookmarkedMovies = data.filter(
    (item) => item.isBookmarked === true && item.category === 'Movie'
  );
  const bookmarkedTvSeries = data.filter(
    (item) => item.isBookmarked === true && item.category === 'TV Series'
  );

  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>Bookmarked Movies</HeadingLarge>
      <div className={`${styles.thumbnailsContainer} ${styles.marginBottom}`}>
        {bookmarkedMovies.map((item) => (
          <Thumbnail items={item} />
        ))}
      </div>
      <HeadingLarge>Bookmarked TV Series</HeadingLarge>
      <div className={styles.thumbnailsContainer}>
        {bookmarkedTvSeries.map((item) => (
          <Thumbnail items={item} />
        ))}
      </div>
    </section>
  );
}
