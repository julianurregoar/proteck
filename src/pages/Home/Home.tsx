import { Footer } from "-/src/components/Footer/Footer"
import { OurBrand } from "-/src/components/OurBrand/OurBrand"
import { Products } from "-/src/components/Products/Products"
import Header from "next/head"
import { PageHeader } from "../../components/Header/PageHeader"
import { Layout } from "../../Layout/Layout"

import styles from './Home.module.scss'

export const Home = () => {
  return (
    <>
      <Layout>
        <PageHeader />
        <Products title={"Hogar"} />
        <OurBrand />
        <Products title={'Industria'} />
      </Layout>
    </ >
  )
}
