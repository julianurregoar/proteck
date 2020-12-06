import { BasicLayout } from "-/src/BasicLayout/BasicLayout"
import { OurBrand } from "-/src/components/OurBrand/OurBrand"
import { Products } from "-/src/components/Products/Products"
import { PageHeader } from "../../components/Header/PageHeader"


export const Home = () => {
  return (
    <>
      <BasicLayout>
        <PageHeader />
        <Products title={"Hogar"} />
        <OurBrand />
        <Products title={'Industria'} />
      </BasicLayout>
    </ >
  )
}
