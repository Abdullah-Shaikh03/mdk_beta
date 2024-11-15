import React from 'react'
import Link from 'next/link'

const History = () => {
  return (
    <section className="py-12 md:py-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -m-3">
      <div className="w-full lg:w-2/3 p-3">
        <div className="rounded-4xl py-16 px-12 h-auto">
          <div className="flex flex-col justify-between h-auto">
            <h1 className="font-heading mb-16 text-5xl sm:text-6xl xl:text-8xl text-heading font-semibold max-w-4xl">
              <span className="mr-3">Empowering through online</span>
              <span className="relative inline-block">
                <span className="relative z-10">learning.</span>
                <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-heading rounded-full"></span>
              </span>
            </h1>
            <p className="text-font text-2xl font-semibold tracking-tight">Your journey to digital excellence starts here.</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-3">
        <div className="bg-neutral-100 bg-opacity-10 shadow-lg rounded-2xl py-16 px-12 h-auto">
          <div className="flex flex-col items-start justify-between h-auto">
            <div className="mb-16 lg:mb-30">
              <span className="inline-block text-font text-2xl font-semibold mb-6 tracking-tight">Completed Projects</span>
              <h2 className="text-5xl md:text-7xl font-semibold mb-12 text-heading">400+</h2>
              <span className="inline-block text-2xl font-semibold mb-6 tracking-tight">Years of operation</span>
              <h2 className="font-heading text-5xl md:text-7xl font-semibold text-heading">35</h2>
            </div>
            <Link className="inline-flex justify-center items-center text-center h-12 p-5 px-8 font-semibold tracking-tight text-2xl text-heading bg-font hover:bg-heading hover:text-font focus:bg-red-200 rounded-lg focus:ring-4 focus:ring-red-100 transition duration-200" href="#">More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default History