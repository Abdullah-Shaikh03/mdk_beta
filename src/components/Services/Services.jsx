import React from "react";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <section className="py-12 md:py-24 px-8 overflow-hidden" id="service">
      <div className="container mx-auto px-4">
        <h1 className="font-heading flex items-center justify-center text-6xl xs:text-8xl sm:text-10xl -tracking-wide mb-14 text-heading">
          Services
        </h1>
        <div className="w-full mx-auto xl:max-w-none">
          <div className="flex flex-wrap -mx-1.5">
            <div className="w-full h-full lg:w-1/3 px-1.5 mb-4 xl:mb-0">
              <div className="h-full border bg-white/10 backdrop-blur-2xl border-font/50 rounded-3xl">
                <div className="relative mb-16 w-full h-80 rounded-3xl object-cover">
                  <Image src="/mdk-ai/kitchen-2.jpeg" className="w-full h-full rounded-3xl object-cover shadow-lg " alt="" fill />
                </div>{" "}
                <div className="px-6 max-w-lg mx-auto pb-16 text-center">
                  
                  <span className="block text-4xl mb-4 text-heading">Services Overview</span>
                  <p className="mb-8 text-lg">
                    Discover our comprehensive services that go beyond manufacturing. From customized kitchen solutions to seamless installations and ongoing maintenance, we provide end-to-end support for your culinary needs.
                  </p>
                  <Link
                    className="group bg-heading/25 py-3 px-5 rounded-full inline-flex text-lg items-center leading-none font-medium"
                    href="/solutions#categories"
                    
                  >
                    <span className="mr-4">See all projects</span>
                    <span className="group-hover:rotate-45 transform transition duration-100">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 1.5L1.5 9.5"
                          stroke="white"
                          strokeWidth="1.3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9.5 8.83571V1.5H2.16429"
                          stroke="white"
                          strokeWidth="1.3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-1.5">
              <div className="group block mb-3 border bg-white/10 backdrop-blur-2xl border-font/50 rounded-3xl" href="#">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-0 self-center">
                    <div className="max-w-xs py-20">
                      <span className="inline-block mb-3 py-2 px-3 border border-font text-sm text-font group-hover:text-font leading-none group-hover:bg-heading group-hover:border-heading rounded-full transition duration-200">
                        Services
                      </span>
                      <span className="block text-4xl mb-4 text-heading">
                        Customization
                      </span>
                      <p>
                        Our team specializes in customizing commercial kitchens to align with your specific needs. We work closely with clients to create tailored solutions that optimize workflow and enhance productivity.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 md:transform group-hover:translate-x-4 transition duration-500">
                  <div className="hidden md:block w-full h-full rounded-3xl object-cover">
                      <Image src="/mdk-ai/customization.jpeg" className="w-full h-full rounded-3xl object-cover" alt="" fill />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group block border bg-white/10 backdrop-blur-2xl border-font/50 rounded-3xl" href="#">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-0 self-center">
                    <div className="max-w-xs py-20">
                      <span className="inline-block mb-3 py-2 px-3 text-sm text-font group-hover:text-white leading-none border border-font group-hover:bg-heading group-hover:border-heading rounded-full transition duration-200">
                        Services
                      </span>
                      <span className="block text-4xl mb-4 text-heading">
                        Installation and Maintenance
                      </span>
                      <p>
                        Beyond design and manufacturing, we offer comprehensive installation services and ongoing maintenance support. Our <strong>commitment doesn't end with the sale</strong> - we are your partner in culinary excellence.
                      </p>
                    </div>
                  </div>
                  <div className="w-5/12 transform group-hover:translate-x-4 transition duration-500">
                    {/* <img className="block w-full h-full rounded-3xl object-fit" src="asitrastudio-assets/services/half-photo-btn1.png" alt=""> */}

                    <div className="block w-full h-full rounded-3xl object-cover">
                      <Image src="/mdk-ai/maintain.jpeg" className="w-full h-full rounded-3xl object-cover" alt="" fill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
