import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Products.module.scss'

export const Products = ({ title }) => {
  return (
    <div>
      <section className={styles.Product}>
        <div className={styles.Product_Heading}>
          <h3>{title}</h3>
          <div className={styles.Product_Container}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  )
}
