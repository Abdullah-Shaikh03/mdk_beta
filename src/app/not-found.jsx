import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const notfound = () => {
  return (
<div className="w-full h-screen flex flex-col items-center justify-center">
    <Image src='/error.svg' width={200} height={200}/>
    <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-heading mt-12">Page Not Found</p>
        <p className="md:text-lg lg:text-xl text-font mt-8">Sorry, the page you are looking for could not be found.</p>
        <Link href="/" className="flex items-center space-x-2 bg-heading hover:text-heading hover:bg-font text-font px-4 py-2 mt-12 transition duration-150 rounded-3xl" title="Return Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
            </svg>
            <span>Return Home</span>
        </Link>
    </div>
</div>
  )
}

export default notfound