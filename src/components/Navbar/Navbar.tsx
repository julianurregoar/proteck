import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className={styles.Navbar}>
        <div className={styles.NavBrand}>
          <h1 className={styles.Brand}>
            <Link href="/" >
              <img src="/images/logo.jpeg" alt="" />
            </Link>
          </h1>
          <div className={clsx(styles.Burger, open && styles.IsActive)} id="burger" onClick={() => setOpen(!open)}>
            <span className={styles.Burger_Open}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                <g fill="#252a32" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            </span>
            <span className={styles.Burger_Close}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#252a32" fillRule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
              </svg>
            </span>
          </div>
        </div>

        <ul className={clsx(styles.Menu, open && styles.IsActiveList)} id="menu">
          <li className={styles.Menu_Item}>
            <Link href="#" >
              <span className={styles.Menu_Link}>
                Nosotros
            </span>
            </Link>
          </li>
          <li className={styles.Menu_Item}>
            <Link href="#" >
              <span className={styles.Menu_Link}>
                Portafolio
            </span>
            </Link>
          </li>
          <li className={styles.Menu_Item}>
            <Link href="#" >
              <span className={styles.Menu_Link}>
                contáctanos
            </span>
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}
