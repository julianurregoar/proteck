import styles from './Footer.module.scss'

const year = () => {
  const n = new Date()
  return n.getFullYear()
}

export const Footer = () => (
  <div>
    <footer className={styles.Footer}>
      <h3>LOGO</h3>
      <ul className={styles.FooterMenu}>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contáctanos</a></li>
        <li><a href="#">Hogar</a></li>
        <li><a href="#">Industria</a></li>
      </ul>
    </footer>
    <a className={styles.Copyright} href="#">Copyright © {year()} All Rights Reserved by Proteck and Clean</a>

  </div>
);
