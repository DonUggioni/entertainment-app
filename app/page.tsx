import { getData } from '@/utils/getData';
import HeadingLarge from './components/typography/headings/heading-L/HeadingLarge';
import styles from './page.module.scss';
import TrendingCarousel from './trending-carousel/TrendingCarousel';
import HomeThumbnailsContainer from './components/homeThumbnailsContainer/HomeThumbnailsContainer';

export default async function Home() {
  const items = await getData();

  return (
    <main className={styles.main}>
      <section className={styles.sectionContainer}>
        <HeadingLarge>Trending</HeadingLarge>
        <div className={styles.thumbnailsContainer}>
          <TrendingCarousel items={items} />
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <HeadingLarge>Recommended for you</HeadingLarge>
        <HomeThumbnailsContainer />
      </section>
    </main>
  );
}
