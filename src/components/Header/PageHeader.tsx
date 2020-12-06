import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './PageHeader.module.scss'

export const PageHeader = () => (
  <section className={styles.Main}>
    {/* <div className={styles.Logo}>
      <Link href="#">
        <img src="/images/logo.jpeg" alt="" />
      </Link>
    </div> */}
    <div className={styles.SideBox}>
      <a href="https://api.whatsapp.com/send?phone=573113005425&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%productos." target="_blank">
        <span className={styles.Icon}>
          <FontAwesomeIcon icon={faWhatsapp} style={{ marginTop: '15px', color: 'white' }} />
        </span>
      </a>
    </div>


    <div className={styles.MainImage}>
      <img src="https://images.ctfassets.net/oggad6svuzkv/7obEfh2QkdVJGmwEyWs5QP/16c375d9c60fccc8b7b18f32b99759f2/Naturals_BrandLineup_BLOG.png" alt="" />
    </div>
    <div className={styles.MainText}>
      <h1>Productos</h1>
      <h2>Para el <span>hogar</span> y la <span>industria</span></h2>
      <a href="#" className={styles.MainBtn}>Nuestro portafolio</a>
    </div>


    <div className={styles.Social}>
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
    </div>
  </section>
)

