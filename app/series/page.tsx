import React from 'react';
import styles from './SeriesCategory.module.scss';
import HeadingLarge from '../components/typography/headings/heading-L/HeadingLarge';
import Thumbnail from '../components/thumbnail/Thumbnail';

export default function SeriesCategory() {
  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>TV Series</HeadingLarge>
      <div className={styles.thumbnailsContainer}>
        <Thumbnail />
      </div>
    </section>
  );
}
