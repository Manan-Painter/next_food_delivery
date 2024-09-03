"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/images/burger.avif",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/images/bread.avif",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/images/pizza.avif",
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-orange-600 p-5 ">
      <div className="w-full flex-1 relative  rounded-xl  overflow-hidden ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover rounded-3xl border-4 border-white  transform transition duration-500 hover:scale-110 hover:shadow-lg"
        />
      </div>
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-white font-bold">
  <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl transition-transform duration-300 hover:scale-105">
    {data[currentSlide].title}
  </h1>
  <button className="bg-white text-orange-600 py-4 px-8  hover:bg-orange-400 rounded-lg  transition-transform duration-300 hover:scale-105">
    Order Now
  </button>
</div>

    
    </div>
  );
};





export default Slider;