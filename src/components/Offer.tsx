import Image from "next/image";
import React from "react";
import offer from '../../public/images/offer2.avif'
import Countdown from "./Countdown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offer2.avif')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl transform transition duration-200 hover:scale-110 hover:shadow-lg">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl ">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <Countdown />
        <button className="bg-orange-600 text-white rounded-md py-3 px-6 transform transition duration-200 hover:scale-110 hover:shadow-4xl">
          Order Now
        </button>
      </div>

      <div className="flex-1 w-full relative md:h-full ">
        <Image
          src={offer}
          alt=""
          fill
          className="object-contain transform transition duration-200 hover:scale-95 hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default Offer;
