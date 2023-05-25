import React from 'react';
import styles from './Bookmarked.module.scss';
import HeadingLarge from '../../components/typography/headings/heading-L/HeadingLarge';
import BookmarkedMovies from '@/app/components/bookmarkedMoviesContainer/BookmarkedMovies';
import BookmarkedSeries from '@/app/components/bookmarkedSeriesContainer/BookmarkedSeries';

export default async function page() {
  // const bookmarkedTvSeries = moviesData.filter(
  //   (item) => item.isBookmarked === true && item.category === 'TV Series'
  // );

  return (
    <section className={styles.sectionContainer}>
      <HeadingLarge>Bookmarked Movies</HeadingLarge>
      <BookmarkedMovies />
      <HeadingLarge>Bookmarked TV Series</HeadingLarge>
      {/* <div className={styles.thumbnailsContainer}>
        {bookmarkedTvSeries.map((item) => (
          <Thumbnail onClick={() => bookmarkHandler(item)} items={item} />
        ))}
      </div> */}
      <BookmarkedSeries />
    </section>
  );
}
