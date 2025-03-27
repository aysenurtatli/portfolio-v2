'use client'

import React from 'react'
import { useEffect, useRef } from "react";

const Marquee = ({ speed = 0.2 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const parentElement = marqueeRef.current;
    if (!parentElement) return;

    const clone = parentElement.innerHTML;
    parentElement.insertAdjacentHTML("beforeend", clone);
    parentElement.insertAdjacentHTML("beforeend", clone);

    let i = 0;
    const firstElement = parentElement.children[0];

    const interval = setInterval(() => {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i += speed;
    }, 16); 

    return () => clearInterval(interval);
  }, [speed]);


    const texts = [
        "Web Development",
        "UI Design",
        "Graphic Design"
      ];
  return (
    <div ref={marqueeRef} className='overflow-hidden flex'>
        {texts.map((text) => (
            <h3 className='whitespace-nowrap text-[30px] text-zinc-400 mx-4'>{text}</h3>
        ))}
    </div>
  )
}

export default Marquee