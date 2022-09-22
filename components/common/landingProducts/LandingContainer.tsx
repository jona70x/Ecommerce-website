import React from 'react'

import Container from '../../UI/Container'
import ProductCard from './ProductCard'

import to1 from '../../../public/images/products/the-ordinary/to1/img1.jpg'
import yttp1 from '../../../public/images/products/youth-to-the-people/yttp1/img1.jpg'
import yttp2 from '../../../public/images/products/youth-to-the-people/yttp2/img1.jpg'

interface Props {
  data: string[]
}

const LandingContainer: React.FC<Props> = ({ data }) => {
  const getFirstThree = (data: string[]) => {
    const firstThree = data.slice(0, 3)

    const modifiedData = firstThree.map((product: any) => {
      return {
        name: product.name,
        price: product.price,
        size: product.size
      }
    })
    return modifiedData
  }

  // Mock data to make it work
  const firstProduct = getFirstThree(data)[0]
  const secondProduct = getFirstThree(data)[1]
  const thirdProduct = getFirstThree(data)[2]

  return (
    <Container>
      <div className="flex flex-col p-4 space-y-4 md:grid-cols-3 md:grid md:gap-6 mx-auto max-w-[1080px]">
        <h1 className="text-center  bg-[#e3e6f3] text-3xl uppercase relative py-1 md:col-start-1 md:col-span-3">
          Best sellers
        </h1>
        <div className="md:col-start-1 md:col-span-2 mx-auto">
          <ProductCard
            description={firstProduct.name}
            size={firstProduct.size}
            image={to1}
            price={firstProduct.price}
          />
        </div>
        <div className="md:flex md:flex-col space-y-4 mx-auto">
          <ProductCard
            description={secondProduct.name}
            size={secondProduct.size}
            image={yttp1}
            price={secondProduct.price}
          />
          <ProductCard
            description={thirdProduct.name}
            size={thirdProduct.size}
            image={yttp2}
            price={thirdProduct.price}
          />
        </div>
      </div>
    </Container>
  )
}

export default LandingContainer
