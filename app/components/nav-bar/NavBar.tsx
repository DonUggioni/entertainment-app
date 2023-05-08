'use client';

import React from 'react';
import styles from './NavBar.module.scss';
import Logo from '../icons/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeNavIcon from '../icons/HomeNavIcon';
import MoviesNavIcon from '../icons/MoviesNavIcon';
import TvSeriesNavIcon from '../icons/TvSeriesNavIcon';
import BookmarkNavIcon from '../icons/BookmarkNavIcon';
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname();

  function isActive(path: string) {
    const sliced = path.slice(0, -1);
    const isActive = pathname.includes(sliced) ? styles.active : '';
    return isActive;
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <ul className={`${styles.list}`}>
        <li className={pathname !== '/' ? '' : styles.active}>
          <Link href={'/'}>
            <HomeNavIcon />
          </Link>
        </li>
        <li className={isActive('movies')}>
          <Link href={'/movies'}>
            <MoviesNavIcon />
          </Link>
        </li>
        <li className={isActive('series')}>
          <Link href={'/series'}>
            <TvSeriesNavIcon />
          </Link>
        </li>
        <li className={isActive('bookmarked')}>
          <Link href={'/bookmarked'}>
            <BookmarkNavIcon />
          </Link>
        </li>
      </ul>
      <div className={styles.avatarWrapper}>
        <Image
          src='/assets/image-avatar.png'
          alt='User avatar picture'
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}
