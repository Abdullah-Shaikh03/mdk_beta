"use client";
import React from "react";
import History from "@/components/About Us/History";
import WhyUs from "@/components/About Us/WhyUs";
import Projects from "@/components/About Us/Projects";
import Facts from "@/components/Services/Facts";

const About = () => {
  const data = [
    {
      id: 1,
      title: "Quality Excellence",
      description: [
        "Upholding a commitment to delivering high-quality kitchen products that meet or exceed customer expectations.",
      ],
      gradient: "from-cyan-700 to-neutral-200 font-bold",
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      description: [
        "Placing customer needs at the forefront of decision-making.",
        "Providing exceptional customer service and building long-term relationships based on trust and satisfaction."
      ],
      gradient: "from-blue-700 to-neutral-200 font-bold",
    },
    {
      id: 3,
      title: "Innovation",
      description: [
        "Staying at the forefront of industry trends and technology to offer cutting-edge solutions."
      ],
      gradient: "from-green-700 to-neutral-200 font-bold",
    },
    {
      id: 4,
      title:"Integrity",
      description: [
        'Conducting business with honesty, transparency, and ethical practices.',
        'Honoring commitments and maintaining the highest standards of integrity in all interactions.'
      ],
      gradient: "from-red-700 to-neutral-200 font-bold",

    },
    {
      id: 5,
      title: "Team Collaboration",
      description: [
        "Fostering a collaborative and inclusive work environment where diverse perspectives are valued.",
        "Promoting teamwork and effective communication to achieve common goals."
      ],
      gradient: "from-yellow-400 to-neutral-100 font-bold",
    }
  ];
  return (
    <>
      <Projects />
      <div className="mx-6">
      <div className="py-8  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
       <Facts /> 
      </div>     
    </div>
    {/* <div className="flex flex-wrap gap-x-4 justify-center item-center">
        {data.map((card) => (
          <div key={card.id} className={`group relative mb-4 w-80 h-96 rounded-xl border bg-gradient-to-tr ${card.gradient} text-white flex items-center justify-center py-10 px-8 shadow-lg transition-all duration-200 ease-in-out`}>
            <h1 className="text-5xl font-bold">{card.title}</h1>
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-gradient-to-bl ${card.gradient} px-10 opacity-0 transition group-hover:opacity-100 text-2xl">
              <p className="mt-4">{card.description[0]}</p>
            </div>
          </div>
        ))}
    </div> */}

    </>
  );
}

export default About;
