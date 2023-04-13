import styles from './index.less';
export default function VueMicroIframe() {
  return (
    <iframe
      className={styles.contentIframe}
      src="http://localhost:8080"
    ></iframe>
  );
}
