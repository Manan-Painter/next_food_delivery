"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductType } from "@/types/types";
import { useEffect } from "react";

const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const Featured = async () => {
  const data: ProductType[] = await getdata();

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <div className="w-5/6 m-auto">
      <div className="mt-5">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="bg-white h-[500px] text-black rounded-lg transform transition duration-500 hover:scale-95 hover:shadow-lg">
              <div className="h-56 rounded-t-xl bg-orange-600 flex justify-center items-center">
                <img src={item.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{item.title}</p>
                <p>{item.desc}</p>
                <button className="bg-orange-600 text-white text-lg px-6 py-1 rounded-xl">
                  {item.price}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
