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

  console.log(pathname.startsWith('/'));

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <ul className={styles.list}>
        <li>
          <Link href={'/home'}>
            <HomeNavIcon />
          </Link>
        </li>
        <li>
          <Link href={''}>
            <MoviesNavIcon />
          </Link>
        </li>
        <li>
          <Link href={''}>
            <TvSeriesNavIcon />
          </Link>
        </li>
        <li>
          <Link href={''}>
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
