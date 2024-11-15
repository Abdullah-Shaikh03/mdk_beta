import React from 'react'
import Image from 'next/image'
import craletto from '@/app/fonts/craletto/cralleto.js'
const Foot = () => {
  return (
    <section className="py-20">
      <div className="relative">
        <h1 className="font-heading mx-auto mb-4 text-center text-4xl font-bold text-heading lg:text-5xl">
          Have an Awesome Project Idea? <br />
          <span className="text-white"> Lets Discuss </span>
        </h1>
        <p className="mb-10 text-center text-xl text-gray-300">
          Get Your Free Evaluation and DESIGN session Now!
        </p>
        <form action="">
          <div className="mx-auto mb-6 flex max-w-lg flex-wrap gap-4">
            <input
              className={`flex-1 rounded-full border text-gray-900 border-orange-100 p-4 placeholder-gray-500 shadow  outline-none transition duration-200 focus:ring focus:ring-red-200`}
              type="text"
              placeholder="Email address"
            />
            <button
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-red-700 bg-heading px-6 py-4 shadow transition duration-200 hover:bg-red-800 focus:ring focus:ring-red-800 sm:w-auto"
              href="/contact"
            >
              <span className="text-white font-semibold text-sm">
                Get Started
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.99996 10H15.4166M15.4166 10L10.4166 5M15.4166 10L10.4166 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="w-full my-12 bg-white/70 py-2 gap-10 md:py-5 text-center justify-center items-center inline-flex">
        <a
          className="inline-block pl-6  text-gray-900 text-lg font-semibold"
          href="#"
        >
          <Image
            src="/mdk-removebg-preview.png"
            alt=""
            width={160}
            height={100}
          />
        </a>
        <div
          className={`text-black pr-3 text-3xl sm:text-4xl md:text-5xl font-normal ${craletto.className}`}
        >
          Desigining Tomorrow’s Kitchen
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="pb-6 lg:pb-10 border-b border-gray-100">
          <div className="flex flex-wrap items-start justify-between">

            <div className="mt-2.5">
              <ul className="flex flex-wrap space-x-4 lg:space-x-8 items-center text-sm">
                <li className="mb-2 md:mb-0 hover:text-heading">
                  <a className="text-sm font-medium" href="/">
                    Home
                  </a>
                </li>
                <li className="mb-2 md:mb-0 hover:text-heading">
                  <a className="text-sm font-medium" href="/about">
                    About
                  </a>
                </li>
                <li className="mb-2 md:mb-0 hover:text-heading">
                  <a className="text-sm font-medium" href="/team">
                    Team
                  </a>
                </li>

                <li className="mb-2 md:mb-0 hover:text-heading">
                  <a className="text-sm font-medium" href="/solutions">
                    Solutions
                  </a>
                </li>
                <li className="mb-2 md:mb-0 hover:text-heading">
                  <a className="text-sm font-medium" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div> 
            <div className="mt-5 sm:mt-0 flex order-last">
              <a
                className="flex justify-center items-center w-10 h-10 mr-4 bg-heading rounded-full"
                href="https://www.facebook.com/mothers.doonkitchen/"
              >
                <svg
                  className="text-white"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="flex justify-center text-sm items-center w-10 h-10 bg-heading rounded-full"
                href="https://jsdl.in/DT-998WYBRZ"
              >
                Jd
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-500 mt-8">
              All rights reserved © Mother's Doon Kitchen 2024
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Foot
