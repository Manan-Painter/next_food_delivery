"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import burgerImage from "../../public/images/nurger9.png";
import pizza from '../../public/images/pizza.jpg'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    burgerImage,
    pizza,
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval time to 3000ms (3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-60 object-cover"
                layout="responsive"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
