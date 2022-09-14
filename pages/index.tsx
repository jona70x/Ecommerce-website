import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import getProducts from './api/getProducts'
import useSWR from 'swr'


import Head from 'next/head'
import LandingContainer from '../components/common/landingProducts/LandingContainer'

// type Props = {
//   products: string[]
// }

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const IndexPage = () => {

  const { data, error } = useSWR(
    "/api/getProducts",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const products = data.data
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


