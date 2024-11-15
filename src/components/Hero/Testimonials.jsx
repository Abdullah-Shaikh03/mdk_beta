import React from 'react'

function Testimonials() {
  const testimonials = [
  {
    id: 1,
    name: "Mr.Ankit Arora",
    location: "PUNJAB GRILL",
    text: "Mother’s Doon Kitchen has transformed our kitchen into a culinary masterpiece. From the initial design phase to installation, their team demonstrated exceptional expertise. The cutting-edge equipment not only meets but exceeds the rigorous demands of our high-volume kitchen. The reliability of their products has significantly contributed to our ability to maintain a five-star dining experience for our guests"
  },
  {
    id: 2,
    name: "M.Steve",
    location: "Orchard",
    text: "Choosing Mother’s Doon Kitchen was the best decision we made for our restaurant's kitchen, 15 years back. The efficiency and functionality of the equipment is great. Mr. Khanna understood our specific needs and delivered a tailored solution that exceeded our expectations. Our kitchen is now the heartbeat of our restaurant, thanks to their expertise."
  },
  {
    id: 3,
    name: "Mr. Sameer",
    location: "Eff Hotel",
    text: "The durability of their equipment has stood the test of our busiest events, ensuring that we deliver high-quality service consistently. I highly recommend them to any professional looking for reliable and efficient kitchen solutions."
  }
  ]
  return (
 <section className="py-6 mx-auto bg-gradient-gray2 overflow-hidden">
 <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 p-8">
        <h6 className="mb-6 text-5xl font-serif italic  font-semibold">Testimonials</h6>
        <p className="mb-18 text-2xl text-neutral-300 tracking-wide">At the heart of our success is a diverse and talented team, united by a shared commitment to excellence.</p>
      </div>
      <div className="w-full md:w-2/3 p-8">
        <div className="flex flex-wrap -m-3">
          <div className="w-full xl:w-1/2 p-3">
            <div className="px-10 py-14 bg-white/20 border border-white/50 rounded-3xl">
              <p className="mb-10 text-xl font-extralight italic tracking-wide"> Mother’s Doon Kitchen has transformed our kitchen into a culinary masterpiece. From the initial design phase to installation, their team demonstrated exceptional expertise. The cutting-edge equipment not only meets but exceeds the rigorous demands of our high-volume kitchen. The reliability of their products has significantly contributed to our ability to maintain a five-star dining experience for our guests.</p>  
              <div className="flex flex-wrap items-end justify-between -m-4">
                <div className="w-auto p-4">
                  <p className="mb-1 text-xl text-heading font-medium tracking-tight"> Mr.Ankit Arora</p>
                  <p className="font-medium text-neutral-300 tracking-tight"> PUNJAB GRILL</p>
                </div>
                <div className="w-auto p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.3542 0H45.5208V29.9479H33.5417V17.6979H26.3542V0ZM5.98959 0H0V18.6979H7.1875V29.9479H19.1667V0H5.98959Z" fill="#19191B"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 p-3">
            <div className="mb-6 px-10 py-14 bg-white/20 border border-white/50 rounded-3xl">
              <p className="mb-10 text-xl font-extralight italic tracking-wide"> Choosing Mother’s Doon Kitchen was the best decision we made for our restaurant's kitchen, 15 years back. The efficiency and functionality of the equipment is great. Mr. Khanna understood our specific needs and delivered a tailored solution that exceeded our expectations. Our kitchen is now the heartbeat of our restaurant, thanks to their expertise.</p> 

              <div className="flex flex-wrap items-end justify-between -m-4">
                <div className="w-auto p-4">
                  <p className="mb-1 text-xl text-heading font-medium tracking-tight"> M.Steve</p>
                  <p className="font-medium text-neutral-300 tracking-tight"> Orchard</p>
                </div>
                <div className="w-auto p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.3542 0H45.5208V29.9479H33.5417V17.6979H26.3542V0ZM5.98959 0H0V18.6979H7.1875V29.9479H19.1667V0H5.98959Z" fill="#19191B"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-10 py-14 bg-white/20 border border-white/50 rounded-3xl">
              <p className="mb-10 text-xl font-extralight italic tracking-wide"> The durability of their equipment has stood the test of our busiest events, ensuring that we deliver high-quality service consistently. I highly recommend them to any professional looking for reliable and efficient kitchen solutions.</p> 

              <div className="flex flex-wrap items-end justify-between -m-4">
                <div className="w-auto p-4">
                  <p className="mb-1 text-xl text-heading font-medium tracking-tight"> Mr. Sameer</p>
                  <p className="font-medium text-neutral-300 tracking-tight"> Eff Hotel</p>
                </div>
                <div className="w-auto p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.3542 0H45.5208V29.9479H33.5417V17.6979H26.3542V0ZM5.98959 0H0V18.6979H7.1875V29.9479H19.1667V0H5.98959Z" fill="#19191B"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials