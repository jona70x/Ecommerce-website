import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'

// importing logos
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="grid w-[100%] grid-cols-2 mx-auto items-center justify-center bg-[#93f2dc] ">
      <div className="col-span-2 justify-self-center">
        <Image src={logo} width="150px" height="50px" alt="skincare logo" />
      </div>

      <div className="flex flex-col items-center justify-center text-sm">
        <h3>Contact</h3>
        <p>
          <strong>Address:</strong> Vallejo, CA
        </p>
        <p>
          <strong>©Jonathan Carpio</strong>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3>Follow me on:</h3>
        <div className="flex space-x-8">
          <Link
            href="https://twitter.com/jona70xc"
            target="_blank"
            rel="noreferrer"
          >
            <a>
              <BsTwitter size={22} className="cursor-pointer" />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jonathancarpioarellano/"
            target="_blank"
            rel="noreferrer"
          >
            <a>
              <BsLinkedin size={22} className="cursor-pointer" />
            </a>
          </Link>
          <Link
            href="https://github.com/jona70x"
            target="_blank"
            rel="noreferrer"
          >
            <a>
              <BsGithub size={22} className="cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
