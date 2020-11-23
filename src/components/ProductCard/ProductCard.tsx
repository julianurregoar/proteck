import React from 'react'
import styles from './ProductCard.module.scss'

export const ProductCard = () => {
  return (
    <div className={styles.Container}>
      <img src="/images/b1.png" alt="" />
      <p>Crema Limpiadora</p>
      <a href="#" className={styles.Price}>$45.00</a>
      <a href="#" className={styles.BuyBtn}>Addicionar</a>
    </div>
  )
}
