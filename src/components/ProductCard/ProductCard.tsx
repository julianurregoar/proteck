import React from 'react'
import styles from './ProductCard.module.scss'

export const ProductCard = ({ title, product }) => {
  return (
    <div className={styles.Container}>
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <a href="#" className={styles.Price}>{product.price}</a>
      <a className={styles.BuyBtn} href={`https://api.whatsapp.com/send?phone=573113005425&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${title}%20en%20${product.name}.%20Gracias`} target="_blank">
        Comprar</a>
    </div>
  )
}
