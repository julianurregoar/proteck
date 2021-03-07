import { Layout } from "-/src/Layout/Layout"
import { OurBrand } from "-/src/components/OurBrand/OurBrand"
import { Products } from "-/src/components/Products/Products"
import { PageHeader } from "../../components/Header/PageHeader"
import styles from './Home.module.scss'

const cremaLimpiadora = [
  {
    name: 'Colapsible - 200ml',
    price: '$5.000',
    image: '/images/cl-colapsible.png'
  },
  {
    name: 'Bala - 1.000ml',
    price: '$10.000',
    image: '/images/cl-bala.png'
  },
  {
    name: 'Galon - 2.500ml',
    price: '$50.000',
    image: '/images/cl-galon.png'
  },
  {
    name: 'Cuñete - 5 galones',
    price: '$10.000',
    image: '/images/cl-cunete.png'
  },
]

const diecox = [
  {
    name: 'Colapsible - 200ml',
    price: '$5.000',
    image: '/images/dcx-bala.png'
  },
  {
    name: 'Bala - 1.000ml',
    price: '$10.000',
    image: '/images/dcx-galon.png'
  },
  {
    name: 'Galon - 2.500ml',
    price: '$50.000',
    image: '/images/dcx-cunete.png'
  },

]
export const Home = () => {
  return (
    <>
      <Layout>
        <PageHeader />
        <section className={styles.Product} id='products'>
          <Products title={"Crema Limpiadora"} dataProducts={cremaLimpiadora} />
          <Products title={'Diecox'} dataProducts={diecox} />
        </section>
        <OurBrand />
      </Layout>
    </ >
  )
}
