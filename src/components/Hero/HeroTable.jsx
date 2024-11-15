import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
const craletto = localFont({
  name: "craletto",
  //public\fonts\craletto\Craletto.ttf
  src: '../fonts/craletto/Craletto.ttf',
  weight: "400",
});

const HeroTable = (props) => {
  return (
    <>
      <div
        className={`${props.className}
        bg-font bg-opacity-10 backdrop-blur-2xl  shadow-2xl rounded-3xl
        mt-[5%]  m-8 justify-center grid md:grid-cols-5 lg:grid-cols-6  align-middle md:flex-row md:justify-between items-start md:items-center`}
      >
        <div className="md:flex-1 m-6 col-span-4  relative">
          <h1
            className={`${craletto.className} text-6xl font-bold text-heading
                text-focus-in text-left`}
          >
            Let&apos;s Redifine Your Culinary Space
          </h1>
          <p className="text-lg mt-4 text-font">
            With a legacy of excellence spanning 21 years, we are the go-to
            choice for businesses seeking state-of-the-art kitchens that
            redefine culinary spaces.
          </p>
          <div className="flex mt-12">
            <Link href="#service" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white bg-heading transition duration-300 ease-out border-2 border-heading rounded-2xl shadow-md group me-2">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-heading group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get Started</span>
            <span className="relative invisible">Button Text</span>
            </Link>
            <Link href="/about" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-heading bg-white transition duration-300 ease-out border-2 border-heading rounded-2xl shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-heading duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-heading transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
            <span className="relative invisible">Learn More</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:flex-1 md:col-span-1 lg:col-span-2 relative text-focus-in md:pl-6 m-6 md:border-l-2 border-heading">
          
        </div>
      </div>
      <div></div>
    </>
  );
};

export default HeroTable;
