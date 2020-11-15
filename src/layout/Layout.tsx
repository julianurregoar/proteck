import { FC } from 'react';
import Head from 'next/head';
import styles from './Layout.module.scss';

export const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>Proteck and Clean</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <meta
      name="description"
      content="Productos para el hogar y la industria"
    />
    <div className={styles.Container}>
      {children}
    </div>
  </>
);