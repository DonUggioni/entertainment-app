import styles from './page.module.scss';
import HeadingLarge from './components/typography/headings/heading-L/HeadingLarge';
export default function Home() {
  return (
    <main className={styles.main}>
      <HeadingLarge>Hello</HeadingLarge>
    </main>
  );
}
