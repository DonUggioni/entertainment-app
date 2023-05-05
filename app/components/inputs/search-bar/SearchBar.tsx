'use client';
import SearchIcon from '../../icons/SearchIcon';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={`${styles.inputContainer}`}>
      <SearchIcon />
      <form className={styles.inputWrapper}>
        <input className={styles.input} type='text' placeholder='Placeholder' />
      </form>
    </div>
  );
}
