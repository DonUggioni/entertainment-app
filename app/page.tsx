import styles from './page.module.scss';
import SearchBar from './components/inputs/search-bar/SearchBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
    </main>
  );
}
