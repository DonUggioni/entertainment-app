import React from 'react';
import classes from './HeadingMedium.module.scss';

export default function HeadingMedium({ children }: { children: string }) {
  return <h2 className={classes.headingMediumLight}>{children}</h2>;
}
