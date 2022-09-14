import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

// importing logos
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="grid w-[100%] grid-cols-2 mx-auto items-center justify-center bg-[#93f2dc] ">
      <div className="col-span-2 justify-self-center">
        <Image src={logo} width="150px" height="50px" />
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
          <a href="https://twitter.com/jona70xc" target="_blank">
            <BsTwitter size={22} className="cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathancarpioarellano/"
            target="_blank"
          >
            <BsLinkedin size={22} className="cursor-pointer" />
          </a>
          <a href="https://github.com/jona70x">
            <BsGithub size={22} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

/*
 <footer class="section-p1">
      <div class="col">
        <img src="images/logo.png" class="logo" alt="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 1318 Santa Clara St. Vallejo, CA. 94590
        </p>
        <p><strong>Phone: </strong> +1 209 555 55 55 / +1 707 555 55 55</p>
        <p><strong>Office hours: </strong> 8:00 - 17:50, Mon - Sat.</p>
        <div class="follow">
          <h4>Follow us on:</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div class="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>

      <div class="col">
        <h4>My account</h4>
        <a href="#">Sign in</a>
        <a href="#">View cart</a>
        <a href="#">My wishlist</a>
        <a href="#">Track my order</a>
        <a href="#">Help</a>
      </div>

      <div class="col install">
        <h4>Install app</h4>
        <p>Check our app</p>
        <img src="images/app/app.jpg" class="logo" alt="download" />
        <p>Secured payment gateways</p>
        <img src="images/payment/payment.jpg" class="logo" />
      </div>

      <div class="copyright">
        <p>
          &copy; 2022. Project made taking inspiration on @Tech2. Jonathan
          Carpio
        </p>
      </div>
    </footer>
*/
