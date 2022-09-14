import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import LandingContainer from '../components/common/landingProducts/LandingContainer'

type Props = {
  products: string[]
}

const IndexPage: NextPage = ({ products }: Props) => {
  return (
    <>
      <Head>
        <title>Trully Skincare store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingContainer data={products} />
    </>
  )
}

export default IndexPage

// Getting data from API
export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch('http://localhost:3000/api/getProducts')
  const response = await data.json()
  const products = response.data
  return {
    props: {
      products,
    },
  }
}
