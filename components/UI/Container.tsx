import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-[90%] lg:h-max-[1200px] mx-auto py-6 h-full">
      {children}
    </div>
  )
}

export default Container
