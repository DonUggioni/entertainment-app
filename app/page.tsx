import styles from './page.module.scss';
import Thumbnail from './components/thumbnail/Thumbnail';
export default function Home() {
  return (
    <main className={styles.main}>
      <Thumbnail />
    </main>
  );
}
