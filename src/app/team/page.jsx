"use client";
import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import Header from "@/components/Team/Header";
import TeamValues from "@/components/Team/TeamValues";
import craletto from "../fonts/craletto/cralleto.js";
import Link from "next/link.js";
function page() {
  const [isSm, setIsSm] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSm(true);
    }
  }, []);
  return (
    <>
     
      <div className="py-18 flex justify-center overflow-hidden">
        <div className="w-full container mx-5 md:mx-12">
        <Header />
          <div className="flex flex-wrap w-full mx-auto">
            <div className="w-full full lg:w-1/3 py-3 ">
              <div className="flex flex-col justify-end p-10 h-full bg-white bg-opacity-10 backdrop-blur-2xl shadow-lg rounded-3xl">
                <div>
                  <h3 className={`${craletto.className} font-semibold mb-4 text-5xl text-heading/80 leading-snug`}>
                    Who We Are?
                  </h3>
                  <p className="mb-8 text-white text-opacity-70 font-medium leading-relaxed">
                  Our team comprises of seasoned professionals with extensive experience in commercial kitchen design, manufacturing, and installation. Together, we bring expertise and passion to every project. 
                  </p>
                  <div className="md:max-w-max">
                    <Link
                      className="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-heading hover:bg-font hover:text-heading transition ease-in-out duration-200"
                      type="button"
                      href="/about"
                    >
                      Learn about us
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="group w-full md:w-1/2 lg:w-1/3 px-1 py-3 sm:p-3 cursor-pointer">
              <div className="relative  md:max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                <div className="w-[400px] h-[400px] md:h-[600px]">
                  <Image
                    src="/team/img2.jpeg"
                    alt=""
                    className="h-full transform group-hover:scale-125 transition ease-in-out duration-1000"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
                <div className="bg-gradient-to-t from-white absolute bottom-0 left-0 w-full p-8 pt-20 transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <h3 className="mb-1 text-heading text-2xl font-semibold leading-snug">
                    Mr. Madan Lal Khanna
                  </h3>
                  <p className="text-black font-medium">Co-Founder</p>
                </div>
                <div className="opacity-0 hover:opacity-100  duration-100 absolute inset-0 z-10  text-6xl text-white font-semibold ">
                  <div className="z-15 h-full w-full transition ease-in-out duration-1000 bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center">
                    <div className="px-5 mb-10 ">
                      <div className="text-3xl text-heading text-left leading-tight h-3">
                        “
                      </div>
                      <p className="text-xl italic font-medium text-gray-800 text-center px-5">
                        The co- founder of Mother’s Doon Kitchen is known to his years of expertise and attention to detail.
                      </p>
                      <div className="text-3xl text-heading text-right leading-tight h-3 -mt-3">
                        ”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full md:w-1/2 lg:w-1/3 px-1 py-3 sm:p-3 cursor-pointer">
              <div className="relative  md:max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                <div className="w-[400px] h-[400px] mdLh-[600px]">

                <Image
                  src="/team/img1.jpeg"
                  alt=""
                  className="h-full transform group-hover:scale-125 transition ease-in-out duration-1000"
                  fill
                  style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="bg-gradient-to-t from-white absolute bottom-0 left-0 w-full p-8 pt-20 transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <h3 className="mb-1 text-2xl font-semibold leading-snug">
                    Mr. Rajesh Khanna
                  </h3>
                  <p className="text-gray-600 font-medium">Co-Founder, CEO</p>
                </div>
                <div className="opacity-0 hover:opacity-100  duration-100 absolute inset-0 z-10  text-6xl text-white font-semibold ">
                  <div className="z-15 h-full w-full transition ease-in-out duration-1000 bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center">
                    <div className="px-5 mb-10 ">
                      <div className="text-3xl text-heading text-left leading-tight h-3">
                        “
                      </div>
                      <p className="text-xl italic font-medium text-gray-800 text-center px-5">
                        Mr. Khanna has dedicated years to strategizing kitchen layouts in various settings such as hotels, restaurants, clubs and catering units. Mother's Doon Kitchen’s current reputation as a company renowned for delivering top-notch service to the best clientele is a testament to his philosophy of attaining excellence through knowledge and honesty. His invaluable qualities include an unwavering perseverance and an unquenchable thirst for growth.
                      </p>
                      <div className="text-3xl text-heading text-right leading-tight h-3 -mt-3">
                        ”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TeamValues/>
        </div>
      </div>

    </>
  );
}

export default page;
