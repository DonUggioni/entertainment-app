import React from 'react';
import styles from './Bookmarked.module.scss';
import HeadingLarge from '../components/typography/headings/heading-L/HeadingLarge';
import Thumbnail from '../components/thumbnail/Thumbnail';

export default function page() {
  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>Bookmarked Movies</HeadingLarge>
      <div className={`${styles.thumbnailsContainer} ${styles.marginBottom}`}>
        <Thumbnail />
      </div>
      <HeadingLarge>Bookmarked TV Series</HeadingLarge>
      <div className={styles.thumbnailsContainer}>
        <Thumbnail />
      </div>
    </section>
  );
}
