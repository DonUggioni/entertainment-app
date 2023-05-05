import styles from './TextSmall.module.scss';

export default function TextSmall({ children }: { children: string | number }) {
  return <p className={styles.text}>{children}</p>;
}
