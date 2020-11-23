import React from 'react'
import styles from './OurBrand.module.scss'

export const OurBrand = () => {
  return (
    <section className={styles.Brand}>
      <div className={styles.Brand_Text}>
        <h3>Nosotros</h3>
        <h4>Diecox</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ut voluptatum. Dolores autem sed doloribus error explicabo corrupti magni temporibus eos facilis repellendus neque, porro amet illum voluptas numquam at cum provident accusamus sapiente esse? Quia corporis corrupti eos quisquam, fugiat veritatis expedita exercitationem temporibus soluta explicabo, odio iusto aliquid, deleniti ratione saepe vel modi nostrum nobis? Adipisci voluptate sequi maxime hic nesciunt pariatur praesentium iusto laboriosam cumque fugit tempore nam ea fuga, minus recusandae sed numquam minima ducimus repellat earum eaque architecto molestiae! Nostrum fugiat minima eligendi quam illum ratione delectus optio explicabo quibusdam, nemo, eos vel non harum natus, quo voluptatum libero sapiente repellat nihil nulla excepturi ullam! Sit, error cupiditate accusantium similique id quia illo quis neque!</p>
      </div>
      <div className={styles.Brand_Img}>
        <img src="./images/mobile.png" alt="" />
      </div>
    </section>
  )
}
