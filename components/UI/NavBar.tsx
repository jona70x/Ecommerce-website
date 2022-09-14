import React, { useState } from 'react'
import Image from 'next/image'

// Icons
import { HiShoppingCart } from 'react-icons/hi'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

// Getting active link
import ActiveLink from './ActiveLink'

//  Logo
import logo from '../../public/images/logo.png'

const NavBar: React.FC = () => {
  // State for responsive nav bar
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false)

  const responsiveMenuHandler = (): void => {
    setResponsiveMenu(!responsiveMenu)
  }

  return (
    <>
      {/* Custom style for active link */}
      <style jsx>
        {`
          .active {
            position: relative;
            color: #088178;
            transition: 0.3s ease;
          }
          .active::after {
            content: '';
            width: 30%;
            height: 2px;
            background: #088178;
            position: absolute;
            bottom: -4px;
            left: 20px;
          }
        `}
      </style>
      <div className="flex justify-between items-center text-center py-5 sticky shadow-xl z-50 mb-6 rounded-md bg-[#93f2dc]">
        <a href="/" className="mx-2">
          <Image src={logo} width="150px" height="50px" alt="skin-care-logo" />
        </a>
        {/* {Responsive size} */}
        <div className="md:hidden flex justify-between space-x-2 mx-2">
          <ActiveLink activeClassName="active" href="/user">
            <a>
              <HiShoppingCart className="hover:text-[#088178]" size={20} />
            </a>
          </ActiveLink>
          <AiOutlineMenuFold
            className="cursor-pointer"
            onClick={responsiveMenuHandler}
            size={20}
          />
        </div>
        {responsiveMenu ? (
          <div className="h-full fixed top-0 w-[50%] z-50 right-0 bg-[#93f2dc] shadow-md md:hidden ease-in-out duration-500">
            <ul className="flex flex-col items-start my-10 mx-6 space-y-5 hover:text-[#088178]>">
              <MdClose
                className="cursor-pointer"
                size={25}
                onClick={responsiveMenuHandler}
              />
              {['home', 'shop', 'about', 'contact', 'blog', 'user'].map(
                (element, index) => {
                  if (element === 'home') {
                    return (
                      <li key={index + element}>
                        <ActiveLink activeClassName="active" href="/">
                          <a className="hover:text-[#088178]">Home</a>
                        </ActiveLink>
                      </li>
                    )
                  } else {
                    return (
                      <li key={index + element}>
                        <ActiveLink
                          activeClassName="active"
                          href={`/${element}`}
                        >
                          <a className="hover:text-[#088178] capitalize">
                            {element}
                          </a>
                        </ActiveLink>
                      </li>
                    )
                  }
                }
              )}
            </ul>
          </div>
        ) : (
          <div className="fixed right-[-200px]"></div>
        )}
        {/* {Normal size screen} */}
        <div className="hidden md:block">
          <ul className="flex justify-between items-center space-x-4 mx-2 hover:text-[#088178]>">
            {['home', 'shop', 'about', 'contact', 'blog', 'user'].map(
              (element, index) => {
                if (element === 'home') {
                  return (
                    <li key={index + element}>
                      <ActiveLink activeClassName="active" href="/">
                        <a className="hover:text-[#088178]">Home</a>
                      </ActiveLink>
                    </li>
                  )
                } else {
                  return (
                    <li key={index + element}>
                      <ActiveLink activeClassName="active" href={`/${element}`}>
                        <a className="hover:text-[#088178] capitalize">
                          {element}
                        </a>
                      </ActiveLink>
                    </li>
                  )
                }
              }
            )}
            <li>
              <ActiveLink activeClassName="active" href="/user">
                <a>
                  <HiShoppingCart className="hover:text-[#088178]" size={18} />
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
