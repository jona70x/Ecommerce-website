import useSWR from 'swr'
import Head from 'next/head'
import LandingContainer from '../components/common/landingProducts/LandingContainer'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const IndexPage = () => {
  const { data, error } = useSWR('/api/allProducts', fetcher)
  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'

  return (
    <>
      <Head>
        <title>Trully Skincare store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingContainer data={data} />
    </>
  )
}

export default IndexPage
