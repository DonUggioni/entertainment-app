import React from 'react';
import styles from './Loading.module.scss';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function Skeleton() {
  return <div className={styles.thumbnail} />;
}

export default function Loading() {
  return (
    <div className={styles.container}>
      {arr.map((item) => (
        <Skeleton key={item} />
      ))}
    </div>
  );
}
