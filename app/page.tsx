import styles from './page.module.scss';
import TrendingThumbnail from './components/trending-thumbnail/TrendingThumbnail';

export default function Home() {
  return (
    <main className={styles.main}>
      <TrendingThumbnail />
    </main>
  );
}
