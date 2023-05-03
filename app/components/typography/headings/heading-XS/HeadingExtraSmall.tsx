import React from 'react';
import classes from './HeadingExtraSmall.module.scss';

export default function HeadingExtraSmall({ children }: { children: string }) {
  return <h4 className={classes.headingExtraSmall}>{children}</h4>;
}
