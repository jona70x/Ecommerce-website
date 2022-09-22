import React from 'react'
import Image, { StaticImageData } from 'next/image'

// Prop Interface
interface Props {
  description: string
  image: StaticImageData
  price: number
  size: string
}

// Component that will hold product info
const ProductCard: React.FC<Props> = ({ description, image, price, size }) => {
  return (
    <div className="border rounded-lg shadow-xl mx-auto border-[#cce7d0] p-2 hover:scale-105 duration-300 relative">
      <div>
        <Image height="1000px" width="1000px" src={image} />
      </div>
      <div className="flex flex-col items-start absolute top-4">
        <h1 className="uppercase text-sm p-2 bg-[#e3e6f3]">{description}</h1>
        <p className="uppercase text-sm p-2 bg-[#e3e6f3]">{size}</p>
        <p className="text-2xl p-2 bg-[#e3e6f3]">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
