import React from 'react';
import classes from './HeadingLarge.module.scss';

export default function HeadingLarge({ children }: { children: string }) {
  return <h1 className={classes.headingLarge}>{children}</h1>;
}
