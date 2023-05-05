import styles from './TextMedium.module.scss';

export default function TextMedium({
  children,
}: {
  children: string | number;
}) {
  return <p className={styles.text}>{children}</p>;
}
