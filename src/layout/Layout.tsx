import { FC } from 'react';
import Head from 'next/head';
import styles from './Layout.module.scss';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>Proteck and Clean</title>
    </Head>
    <meta
      name="description"
      content="Productos para el hogar y la industria"
    />
    <div>
      <Navbar />
      <div className={styles.Container}>
        {children}
      </div>
      <Footer />
    </div>
  </>
);