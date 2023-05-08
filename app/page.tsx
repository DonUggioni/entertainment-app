import Thumbnail from './components/thumbnail/Thumbnail';
import TrendingThumbnail from './components/trending-thumbnail/TrendingThumbnail';
import HeadingLarge from './components/typography/headings/heading-L/HeadingLarge';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <HeadingLarge>Trending</HeadingLarge>
        <div className={styles.thumbnailsContainer}>
          <TrendingThumbnail />
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <HeadingLarge>Recommended for you</HeadingLarge>
        <div className={styles.thumbnailsContainer}>
          <Thumbnail />
        </div>
      </section>
    </main>
  );
}
