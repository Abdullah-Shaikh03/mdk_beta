"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./Scroller.css";

const Scroller = () => {
  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    const scrollerInner = document.querySelector(".scroller__inner");

    if (
      scroller &&
      scrollerInner &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      addAnimation(scroller, scrollerInner);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  function addAnimation(scroller, scrollerInner) {
    scroller.setAttribute("data-animated", "true");

    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }

  return (
    <div className="scroller w-full" data-direction="left" data-speed="slow">
      <div className="scroller__inner">
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/1.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/2.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/3.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/4.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/5.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/6.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/7.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/8.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/9.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/10.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/11.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/12.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/13.jpeg"
        />
        <Image
          className="mx-5 rounded-full"
          width={100}
          height={100}
          src="/scroller/14.jpeg"
        />
      </div>
    </div>
  );
};

export default Scroller;
