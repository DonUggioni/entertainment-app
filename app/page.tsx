import Auth from './components/auth/Auth';
import styles from './page.module.scss';

export default function Login() {
  return (
    <main className={styles.container}>
      <Auth />
    </main>
  );
}
