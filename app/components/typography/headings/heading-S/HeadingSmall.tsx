import React from 'react';
import classes from './HeadingSmall.module.scss';

export default function HeadingSmall({ children }: { children: string }) {
  return <h3 className={classes.headingSmall}>{children}</h3>;
}
