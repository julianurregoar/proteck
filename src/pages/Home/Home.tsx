import Link from "next/link"
import Header from "../../components/Header/Header"
import { Layout } from "../../layout/Layout"


export const Home = () => {
  return (
    <div>
      <Layout>
        <Header>Next App</Header>
        <Link href='/about'>ABOUT</Link>
      welcome!
      </Layout>
    </div>
  )
}
