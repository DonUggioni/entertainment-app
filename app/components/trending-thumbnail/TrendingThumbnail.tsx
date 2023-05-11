'use client';

import React, { useState } from 'react';
import styles from './TrendingThumbnail.module.scss';
import tvIcon from '../../../public/assets/icons/icon-category-tv.svg';
import movieIcon from '../../../public/assets/icons/icon-category-movie.svg';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import Image from 'next/image';
import PlayIcon from '../icons/PlayIcon';

import HeadingExtraSmall from '../typography/headings/heading-XS/HeadingExtraSmall';
import HeadingSmall from '../typography/headings/heading-S/HeadingSmall';
import TextMedium from '../typography/text/text-medium/TextMedium';
import { InfoProps } from '@/utils/getData';
import BookmarkFull from '../icons/BookmarkFull';
import { useAppContext } from '@/app/store/AppContext';

export default function TrendingThumbnail({ item }: { item: InfoProps }) {
  const { screenWidth } = useAppContext();

  return (
    <div className={styles.container}>
      <button className={styles.bookmarkIconContainer}>
        {item.isBookmarked === false ? <BookmarkEmpty /> : <BookmarkFull />}
      </button>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={
            screenWidth <= 768
              ? item.thumbnail.trending?.small!
              : item.thumbnail.trending?.large!
          }
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
          <TextMedium>{item.year}</TextMedium>
          <span>&#8226;</span>
          <div className={styles.categoryContainer}>
            <Image
              className={styles.icon}
              src={item.category === 'TV Series' ? tvIcon : movieIcon}
              alt='Icon displaying category'
            />
            <TextMedium>{item.category}</TextMedium>
            <span>&#8226;</span>
          </div>
          <TextMedium>{item.rating}</TextMedium>
        </div>
        <HeadingSmall>{item.title}</HeadingSmall>
      </div>
    </div>
  );
}
