'use client';

import React from 'react';
import styles from './BookmarkButton.module.scss';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import BookmarkFull from '../icons/BookmarkFull';

interface Types {
  isBookmarked: boolean;
}

export default function BookmarkButton({ items }: { items: Types }) {
  return (
    <button className={styles.bookmarkIconContainer}>
      {items.isBookmarked === false ? <BookmarkEmpty /> : <BookmarkFull />}
    </button>
  );
}
