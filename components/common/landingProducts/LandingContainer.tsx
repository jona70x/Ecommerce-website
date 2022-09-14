import React from 'react'
import Image from 'next/image'

//
import Container from '../../UI/Container'
import ProductCard from './ProductCard'

interface Props {
  data: string[]
}

const LandingContainer: React.FC<Props> = ({ data }) => {
  console.log(data)

  const getFirstThree = (data: string[]) => {
    const firstThree = data.slice(0, 3)
    console.log(firstThree)
    const modifiedData = firstThree.map((product: any) => {
      return {
        name: product.name,
        price: product.price,
        size: product.size,
        images: product.images,
      }
    })
    return modifiedData
  }
  console.log(getFirstThree(data))

  // Mock to make it work

  const firstProduct = getFirstThree(data)[0]
  const secondProduct = getFirstThree(data)[1]
  const thirdProduct = getFirstThree(data)[2]

  return (
    <Container>
      <div className="flex flex-col p-4 space-y-4 md:grid-cols-3 md:grid md:gap-6 mx-auto max-w-[1080px]">
        <h1 className="text-center bg-[#93f2dc] text-3xl uppercase relative py-1 md:col-start-1 md:col-span-3">
          Best sellers
        </h1>
        <div className="md:col-start-1 md:col-span-2 mx-auto">
          <ProductCard
            description={firstProduct.name}
            size={firstProduct.size}
            image={`/${firstProduct.images[0]}`}
            price={firstProduct.price}
          />
        </div>
        <div className="md:flex md:flex-col space-y-4 mx-auto">
          <ProductCard
            description={secondProduct.name}
            size={secondProduct.size}
            image={`/${secondProduct.images[0]}`}
            price={secondProduct.price}
          />
          <ProductCard
            description={thirdProduct.name}
            size={thirdProduct.size}
            image={`/${thirdProduct.images[0]}`}
            price={thirdProduct.price}
          />
        </div>
      </div>
    </Container>
  )
}

export default LandingContainer
