import styles from './page.module.scss';
import SearchBar from './components/inputs/searchBar/SearchBar';
export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
    </main>
  );
}
