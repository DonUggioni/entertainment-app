'use client';
import { useAppContext } from '@/app/store/AppContext';
import SearchIcon from '../../icons/SearchIcon';
import styles from './SearchBar.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function setPlaceHolder() {
  const pathname = usePathname();

  if (pathname === '/movies') {
    return 'Search for movies';
  }

  if (pathname === '/series') {
    return 'Search for TV series';
  }

  if (pathname === '/bookmarked') {
    return 'Search for bookmarked shows';
  }

  return 'Search for movies or TV series';
}

export default function SearchBar() {
  const { moviesData, setMoviesData, searchParams, setSearchParams } =
    useAppContext();
  const [initialData, setInitialData] = useState(moviesData);

  useEffect(() => {
    if (searchParams.length === 0) {
      setMoviesData(initialData);
    }

    if (searchParams.length > 0) {
      setMoviesData(
        moviesData.filter((item) => item.title.includes(searchParams))
      );
    }
  }, [searchParams]);

  return (
    <div className={`${styles.inputContainer}`}>
      <SearchIcon />
      <form className={styles.inputWrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder={setPlaceHolder()}
          onChange={(e) => setSearchParams(e.target.value)}
        />
      </form>
    </div>
  );
}
