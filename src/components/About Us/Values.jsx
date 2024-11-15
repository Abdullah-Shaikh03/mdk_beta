import React from "react";

const Values = () => {
  const values = [
    {
      title: "Quality Excellence",
      description:
        "Upholding a commitment to delivering high-quality kitchen products that meet or exceed customer expectations.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Placing customer needs at the forefront of decision-making. Providing exceptional customer service and building long-term relationships based on trust and satisfaction.",
    },
    {
      title: "Innovation",
      description:
        "Staying at the forefront of industry trends and technology to offer cutting-edge solutions.",
    },
    {
      title: "Integrity",
      description:
        "Conducting business with honesty, transparency, and ethical practices. Honoring commitments and maintaining the highest standards of integrity in all interactions.",
    },
  ]
  return (
// Quality Excellence:
// •	Upholding a commitment to delivering high-quality kitchen products that meet or exceed customer expectations.
// Customer Satisfaction:
// •	Placing customer needs at the forefront of decision-making.
// •	Providing exceptional customer service and building long-term relationships based on trust and satisfaction.
// Innovation:
// •	Staying at the forefront of industry trends and technology to offer cutting-edge solutions.
// Integrity:
// •	Conducting business with honesty, transparency, and ethical practices.
// •	Honoring commitments and maintaining the highest standards of integrity in all interactions.


<>
  <h1 className="font-heading flex items-center justify-center text-6xl xs:text-8xl sm:text-10xl -tracking-wide mb-14 text-heading">
          Our Values
        </h1>
<div className="flex flex-wrap mb-2 px-8">
  {
    values.map((value, index) => (
      <div key={index} className="w-full lg:w-1/2 p-4">
        <div className="relative p-8 h-full rounded-3xl border border-white/50 bg-white/10 backdrop-blur-2xl">
          <div className="absolute top-8 left-0 bg-heading w-0.5 h-6"></div>
          <div className="pl-8">
            <h2 className="text-2xl font-bold font-heading mb-4">{value.title}</h2>
            <p className="text-gray-300">{value.description}</p>
          </div>
        </div>
      </div>
    ))
  }
    </div>
  </>
  );
};

export default Values;
