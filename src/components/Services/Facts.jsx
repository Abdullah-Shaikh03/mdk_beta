import React from 'react'
import Link from 'next/link'
import craletto from '@/app/fonts/craletto/cralleto'
function Facts() {
//     •	Innovation: We are at the forefront of kitchen technology, constantly innovating to bring you the latest advancements in equipment design and functionality.
// •	Quality Craftsmanship: Each piece of equipment that bears our name is a testament to our dedication to precision craftsmanship. From concept to creation, we uphold the highest standards of quality.
// •	Custom Solutions: Recognizing that every kitchen is unique, we offer customizable solutions tailored to your specific requirements. Our team works closely with clients to ensure that the equipment seamlessly integrates into their workflow.
// •	Reliability: With us, you can trust that your kitchen equipment is built to last. Our products undergo rigorous testing to ensure durability and reliability in even the most demanding culinary environments.

    const facts = [
    {
      id: 1,
      title: "Innovation",
      description: "We are at the forefront of kitchen technology, constantly innovating to bring you the latest advancements in equipment design and functionality."
    },
    {
      id: 2,
      title: "Quality Craftsmanship",
      description: "Each piece of equipment that bears our name is a testament to our dedication to precision craftsmanship. From concept to creation, we uphold the highest standards of quality."
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Recognizing that every kitchen is unique, we offer customizable solutions tailored to your specific requirements. Our team works closely with clients to ensure that the equipment seamlessly integrates into their workflow."
    },
    {
      id: 4,
      title: "Reliability",
      description: "With us, you can trust that your kitchen equipment is built to last. Our products undergo rigorous testing to ensure durability and reliability in even the most demanding culinary environments."
    }
    ]
  return (
   <section className="relative py-12 md:py-12 bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden">
  <div className="container mx-auto px-4 relative">
    <h1 className={`"font-heading text-6xl text-heading tracking-tighter mb-12" ${craletto.className}`}>Why Choose Us?</h1>
    {
        facts.map((facts) => {
            return (
                <div className="relative group block xl:flex pb-8 mt-12 items-end border-b border-black" >
                    <div className="mb-8 xl:mb-0">
                        <span className="block lg:-mb-1 text-sm text-gray-400">0{facts.id}</span>
                        <h3 className="text-4xl xs:text-4xl lg:text-4xl font-semibold text-heading italic inline-block pb-2 border-b-2 border-transparent group-hover:border-heading transition duration-150">{facts.title}</h3>
                    </div>
                    <div className="max-w-2xl text-right text-xl tracking-wider mb-8 xl:mb-0 ml-auto xl:mr-20">
                        <p>{facts.description}</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                            <svg width="33" height="33" viewbox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 3L3 30" stroke="white" strokeWidth="4.3875" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round"></path>
                                <path d="M30 27.758V3H5.24196" stroke="white" strokeWidth="4.3875" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                
            )
        })
    }
  </div>
</section> 
  )
}

export default Facts