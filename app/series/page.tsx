import React from 'react';
import styles from './SeriesCategory.module.scss';
import HeadingLarge from '../components/typography/headings/heading-L/HeadingLarge';
import Thumbnail from '../components/thumbnail/Thumbnail';
import { getData } from '@/utils/getData';

export default async function SeriesCategory() {
  const data = await getData();

  const tvSeries = data.filter((item) => item.category === 'TV Series');
  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>TV Series</HeadingLarge>
      <div className={styles.thumbnailsContainer}>
        {tvSeries.map((item) => (
          <Thumbnail items={item} />
        ))}
      </div>
    </section>
  );
}
