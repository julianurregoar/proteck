import React, { FC } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Products.module.scss'

export type Data = {
  name: string;
  price: string;
  image: string;
}

type Props = {
  dataProducts: Data[],
  title: string
}
export const Products: FC<Props> = ({ title, dataProducts }) => {
  return (
    <div>
      <section className={styles.Product}>
        <div className={styles.Product_Heading}>
          <h3>{title}</h3>
          <div className={styles.Product_Container}>
            {dataProducts.map(product => (
              <ProductCard title={title} product={product} />
            )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
