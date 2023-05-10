import { getData } from '@/utils/getData';
import Thumbnail from './components/thumbnail/Thumbnail';
import TrendingThumbnail from './components/trending-thumbnail/TrendingThumbnail';
import HeadingLarge from './components/typography/headings/heading-L/HeadingLarge';
import styles from './page.module.scss';
import TrendingCarousel from './trending-carousel/TrendingCarousel';

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <HeadingLarge>Trending</HeadingLarge>
        <div className={styles.thumbnailsContainer}>
          <TrendingCarousel />
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
