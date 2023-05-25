import React from 'react';
import styles from './SeriesCategory.module.scss';
import HeadingLarge from '../../components/typography/headings/heading-L/HeadingLarge';
import SeriesThumbnailsContainer from '../../components/seriesThumbnailsContainer/SeriesThumbnailsContainer';

export default async function SeriesCategory() {
  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>TV Series</HeadingLarge>
      <SeriesThumbnailsContainer />
    </section>
  );
}
