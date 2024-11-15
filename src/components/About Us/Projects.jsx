import React from 'react'

function Projects() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden mx-3 sm:mx-8 md:mx-12">
     <div className="w-full px-6 ">
    <div className=" ">
   
        
       <div className="container mx-auto text-center py-12 px-4">
        <h1 className="font-ubuntu text-5xl xs:text-6xl md:text-7xl font-bold mb-4">Build <span className="font-serif text-heading italic">To Last</span></h1>
        <p className="text-lg mb-16">At Mother's Doon Kitchen, quality is not just a goal<br/>it's our standard.</p>
      </div> 
  
      <div className="flex flex-wrap p-2 sm:p-5 border border-white/80 bg-white/10 backdrop-blur-2xl -mx-4 rounded-full">
        <div className="group relative w-1/3 px-2 py-3 sm:px:4 sm:py-6 md:pb-0  sm:mt-0 lg:mb-0">
          <div className="absolute top-1/2 right-0 w-px h-20 md:h-28 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="text-center">
            <span className="block group-hover:animate-[bounce_1s_ease-in-out_infinite] transform group-hover:text-heading ease-linear  transition-colors text-4xl sm:text-5xl lg:text-7xl font-ubuntu font-bold 0 mb-1 sm:mb-5">200+</span>
            <span className="text-sm sm:text-xl text-gray-200">PRODUCTS</span>
          </div>
        </div>
        <div className="group relative w-1/3 px-2 py-3 sm:px:4 sm:py-6 md:pb-0  sm:mb-0 first-line: lg:mb-0">
          <div className="absolute top-1/2 right-0 w-px h-20 md:h-28 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="text-center">
            
            <span className="block group-hover:animate-[bounce_1s_ease-in-out_infinite] transform group-hover:text-heading ease-linear  transition-colors text-4xl sm:text-5xl lg:text-7xl font-ubuntu font-bold 0 mb-1 sm:mb-5">1K+</span>
            <span className="text-sm sm:text-xl text-gray-200">PROJECTS</span>
          </div>
        </div>
        <div className="group relative w-1/3 px-2 py-3 sm:px:4 sm:py-6 md:pb-0 lg:mb-0">
          <div className="text-center">
            <span className="block group-hover:animate-[bounce_1s_ease-in-out_infinite] transform group-hover:text-heading ease-linear  transition-colors text-4xl sm:text-5xl lg:text-7xl font-ubuntu font-bold 0 mb-1 sm:mb-5">100+</span>
            <span className="text-sm sm:text-xl text-gray-200">CLIENTS</span>
          </div>
          </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Projects