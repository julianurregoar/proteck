import { OurBrand } from "-/src/components/OurBrand/OurBrand"
import { Products } from "-/src/components/Products/Products"
import { PageHeader } from "../../components/Header/PageHeader"
import { Layout } from "../../Layout/Layout"

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
