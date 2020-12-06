import Head from 'next/head';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

import styles from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Proteck and Clean</title>
    <meta
      name="description"
      content="Productos para el hogar y la industria"
    />
    </Head>
    <div>
      <Navbar />
      <div className={styles.Container}>
        {children}
      </div>
      <Footer />
    </div>
  </>
);