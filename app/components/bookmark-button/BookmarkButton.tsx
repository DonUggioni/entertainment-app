'use client';

import React from 'react';
import styles from './BookmarkButton.module.scss';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import BookmarkFull from '../icons/BookmarkFull';

interface Types {
  isBookmarked: boolean;
}

export default function BookmarkButton({
  items,
  onClick,
}: {
  items: Types;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles.bookmarkIconContainer} onClick={onClick}>
      {items.isBookmarked === false ? <BookmarkEmpty /> : <BookmarkFull />}
    </button>
  );
}
