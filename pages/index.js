import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ImageUpload from './';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LUMOS Code Interview</title>
      </Head>

      <main className={styles.main}>
        <div> hi </div>
        <ImageUpload />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>LUMOS</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
