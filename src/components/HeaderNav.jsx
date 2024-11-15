"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Team",
    link: "/team",
  },
  {
    id: 3,
    name:"Solutions",
    link: "/solutions",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  }
]

const HeaderNav = () => {

  const navLinks = [
    { href: "/about", text: "About" },
    { href: "/team", text: "Team" },
    { href: "/solutions", text: "Solutions" },
    { href: "/contact", text: "Contact" },
  ];

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
      setOpen(!open);    
  }

  const renderNavLinks = () => {
    return navLinks.map((link, index) => (
      <li key={index} className={`p-2 text-[18px] font-ubuntu sm:hover:rounded-3xl  sm:hover:px-10 sm:hover:text-font sm:hover:bg-heading/25`}>
        <Link className={`text-black ${pathname === link.href? "text-heading": "text-black" } `} href={link.href} onClick={clickHandler} >{link.text}</Link>
      </li>
    ));
  }

  return (
    <div className="text-base mx-8 md:mx-12 lg:mx-16 mt-12 backdrop-filter backdrop-blur-sm bg-opacity-[70%] bg-white top-4 z-50 sticky rounded-3xl md:rounded-full shadow-2xl">
      

      <nav>
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-font relative w-[120px] h-[70px] sm:w-[180px] ml-5 sm:h-[80px]" >
            <Image
              alt="Mountains"
              src='/mdk-removebg-preview.png'
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
           <div className="text-font hidden lg:block relative w-[90px] h-[50px] sm:w-[120px] ml-5 sm:h-[52px]" >
              <Image
                alt="Mountains"
                src='/mdkbg-r.png'
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>  
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center mr-4 p-2 w-10 h-10 justify-center text-sm md:hidden focus:outline-none"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={clickHandler}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        <div className={`${open ? "block" : "hidden"} text-center items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="border-none flex flex-col text-right md:text-center font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {
              // routes.map((route) => (
              //   <li key={route.id} className={`p-2 text-font hover:rounded-2xl hover:text-font hover:bg-heading`}>
              //     <Link href={route.link} > {route.name} </Link>
              //   </li>
              // ))
              renderNavLinks()
            }
          </ul>
        </div>
        </div>
      </nav>
    </div>

  );
};

export default HeaderNav;
