import styles from '@/styles/Error.module.css';
import { PiWifiXBold } from 'react-icons/pi';

export default function Offline() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 style={{ fontSize: '98px', color: 'var(--red)' }}>
          <PiWifiXBold />
        </h1>
        <h3>uhm.</h3>
        <p>You went offline. Turn on your internet</p>
      </div>
    </main>
  );
}
