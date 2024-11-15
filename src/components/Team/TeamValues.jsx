import React from 'react'

function TeamValues() {
     const whyChooseUs = [
    {
      title: "Quality Excellence",
      description: [
        "Upholding a commitment to delivering high-quality kitchen products that meet or exceed customer expectations.",
      ],
    },
    {
      title: "Transparent",
      description: [
        "Our transparency defines us - Our understanding of ourselves aligns with your perception of us. We are forthright about our policies, ensuring that our promises align with our deliveries.",
      ],
    },
    {
      title: "Responsible",
      description: [
        "We aim to enrich your space , making it better and better. Taking complete ownership of any unforeseen challenges, and helping you find solutions of the same.",
      ],
    },
    {
      title: "MAKE IN INDIA",
      description: [
        "Our foremost objective is to bring pride to the nation, and we are making significant strides toward achieving this goal.",
      ],
    },
  ]
  return (
     <div className="flex py-16 flex-wrap mb-16 -mx-4">
      {
      whyChooseUs.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 p-4">
          <div className="border border-gray-200 h-full bg-white/10 backdrop-blur-2xl rounded-3xl p-8">
            <div className="rounded-2xl bg-heading w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M11.0001 2.66663V29.3333H10.4134C5.56008 29.3333 2.66675 26.44 2.66675 21.5866V10.4133C2.66675 5.55996 5.56008 2.66663 10.4134 2.66663H11.0001Z" fill="white"></path>
                <path d="M28.8333 10.4133V14.5H13.5V3.16663H21.5867C23.9139 3.16663 25.7113 3.85839 26.9264 5.07351C28.1416 6.28864 28.8333 8.08606 28.8333 10.4133Z" fill="white" stroke="white"></path>
                <path d="M29.3333 17V21.5867C29.3333 26.44 26.44 29.3333 21.5867 29.3333H13V17H29.3333Z" fill="white"></path>
              </svg>
            </div>
            <div className="flex mb-4">
              <div className="w-0.5 h-6 bg-heading transform -translate-x-8"></div>
              <h2 className="text-2xl font-bold font-heading">{item.title}</h2>
            </div>
            <p className="text-gray-200">
              {item.description.map((desc, index) => (
                <span key={index} className="block mb-2">{desc}</span>
              ))}
            </p>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default TeamValues