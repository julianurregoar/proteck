import { Layout } from "-/src/Layout/Layout"
import { OurBrand } from "-/src/components/OurBrand/OurBrand"
import { Products } from "-/src/components/Products/Products"
import { PageHeader } from "../../components/Header/PageHeader"


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
