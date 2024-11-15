import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export const BouncyCardsFeatures = () => {
//   •	Cooking equipment
// •	Bar equipment- coffee machine, coffee grinder, bar blender, wine cooler, ice crusher, bottle cooler
// •	HoReCa (Hotel, Restuarants and Catering)- Fryers, Ovens, Brat Pans and Boiling Pans, ranges, bakery equipment, Preparation equipment, Display Kitchen equipment
// •	Custom Fabrication – Cooking equipment, Work Tables, Baine Marie Hot & Cold, Trolleys, Storage equipment 
// •	Trolleys and Racks
// •	Refrigeration equipment – upright chillers, upright freezers, combi units, undercounter chillers and freezers, saladetts, blast freezers, water cooler, ice cubers

    return (
    <section className="mx-8 md:mx-20  px-4 py-3 text-slate-800" id="categories">
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <div className="w-full h-full relative">
            <Image
              src="/mdk-ai/kitchen.jpeg"
              className="w-full h-full rounded-3xl object-cover shadow-lg"
              alt=""
              layout="fill"
            />
          </div>
            <CardTitle>Cooking Equipment</CardTitle>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8">
          <div className="w-full h-full relative">
            <Image
              src="/mdk-ai/bar.jpeg"
              className="w-full h-full rounded-3xl object-cover shadow-lg"
              alt=""
              layout="fill"
            />
          </div>
            <CardTitle>Bar Equipment</CardTitle>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
            <div className="w-full h-full relative">
                <Image src="/mdk-ai/horeca.jpeg" className="w-full h-full rounded-3xl object-cover shadow-lg " alt="" fill />
            </div>
            <CardTitle>HoReCa</CardTitle>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
            <div className="w-full h-full relative">
                <Image src="/mdk-ai/custom.jpeg" className="w-full h-full rounded-3xl object-cover shadow-lg " alt="" fill />
            </div>
            <CardTitle>Custom Fabrication</CardTitle>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
            <div className="w-full h-full relative">
                <Image src="/mdk-ai/trolleys.jpeg" className="w-full h-full rounded-3xl object-cover shadow-lg " alt="" fill />
            </div>
        
            <CardTitle>Trolleys and Racks</CardTitle>
       
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
            <div className="w-full h-full relative">
                <Image src="/mdk-ai/refrigeration.jpeg" className="w-full h-full rounded-3xl object-cover shadow-lg " alt="" fill />
            </div>
            <CardTitle>Refrigeration Equipment</CardTitle>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-8 backdrop-blur-lg shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <div className="absolute bottom-0 left-4 right-4 top-8 translate-y-8 rounded-t-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 transition-transform duration-[250ms] group-hover:translate-y-48 group-hover:rotate-[2deg] shadow-lg">
      <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    </div>
  );
};