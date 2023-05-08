import React from 'react';
import styles from './TrendingThumbnail.module.scss';
import tvIcon from '../../../public/assets/icons/icon-category-tv.svg';
import movieIcon from '../../../public/assets/icons/icon-category-movie.svg';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import Image from 'next/image';
import PlayIcon from '../icons/PlayIcon';

import HeadingExtraSmall from '../typography/headings/heading-XS/HeadingExtraSmall';
import HeadingSmall from '../typography/headings/heading-S/HeadingSmall';
import TextMedium from '../typography/text/text-medium/TextMedium';

export default function TrendingThumbnail() {
  return (
    <div className={styles.container}>
      <button className={styles.bookmarkIconContainer}>
        <BookmarkEmpty />
      </button>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src='/assets/thumbnails/1998/trending/large.jpg'
          alt='Thumbnail displaying image of movie'
          width={470}
          height={230}
        />
        <div className={styles.imageContainerOverlay}>
          <div>
            <PlayIcon />
            <HeadingExtraSmall>Play</HeadingExtraSmall>
          </div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionInnerWrapper}>
          <TextMedium>2019</TextMedium>
          <span>&#8226;</span>
          <div className={styles.categoryContainer}>
            <Image
              className={styles.icon}
              src={tvIcon}
              alt='Icon displaying category'
            />
            <TextMedium>Movie</TextMedium>
            <span>&#8226;</span>
          </div>
          <TextMedium>PG</TextMedium>
        </div>
        <HeadingSmall>The Great Lands</HeadingSmall>
      </div>
    </div>
  );
}
