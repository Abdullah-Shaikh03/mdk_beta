"use client"
import Image from "next/image"
const HeroImg = (props) => {
  return (
    <div
      className="mx-auto h-[600px] bg-cover bg-fixed bg-center bg-no-repeat shadow-lg url"
      style={{
        backgroundImage: "url(/home/hero.jpeg)",
      }}
    >
    </div>
  )
}

export default HeroImg