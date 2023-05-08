'use client';
import SearchIcon from '../../icons/SearchIcon';
import styles from './SearchBar.module.scss';
import { usePathname } from 'next/navigation';

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
  return (
    <div className={`${styles.inputContainer}`}>
      <SearchIcon />
      <form className={styles.inputWrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder={setPlaceHolder()}
        />
      </form>
    </div>
  );
}
