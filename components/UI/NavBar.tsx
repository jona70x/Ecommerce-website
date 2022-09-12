import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { HiShoppingCart } from "react-icons/hi";

// Getting active link
import ActiveLink from "./ActiveLink";

//  Logo
import logo from "../../public/images/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center text-center py-5 sticky shadow-xl z-50 mb-6 rounded-md bg-[#e3e6f3]">
      <a href="/" className="mx-2">
        <Image src={logo} width="150px" height="50px" alt="skin-care-logo" />
      </a>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center space-x-4 mx-2 hover:text-[#088178]>">
          <style jsx>
            {`
              .active {
                position: relative;
                color: #088178;
                transition: 0.3s ease;
              }
              .active::after {
                content: "";
                width: 30%;
                height: 2px;
                background: #088178;
                position: absolute;
                bottom: -4px;
                left: 20px;
              }
            `}
          </style>
          {/* {Normal size screen} */}
          {["home", "shop", "about", "contact", "blog", "user"].map(
            (element, index) => {
              if (element === "home") {
                return (
                  <li key={index + element}>
                    <ActiveLink activeClassName="active" href="/">
                      <a className="hover:text-[#088178]">Home</a>
                    </ActiveLink>
                  </li>
                );
              } else {
                return (
                  <li key={index + element}>
                    <ActiveLink activeClassName="active" href={`/${element}`}>
                      <a className="hover:text-[#088178] capitalize">
                        {element}
                      </a>
                    </ActiveLink>
                  </li>
                );
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
  );
};

export default NavBar;

/*
<section id="header">
      <a href="#"
        ><img src="images/logo.png" class="logo" alt="skin-care-logo"
      /></a>

      <div>
        <ul id="navbar">
          <li><a class="active" href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li>
            <a href="cart.html" id="lg-bar"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
          </li>
          <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
        <i id="bar" class="fas fa-outdent"> </i>
      </div>
    </section>

*/
