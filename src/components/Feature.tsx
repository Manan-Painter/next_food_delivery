"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductType } from "@/types/types";

const Featured = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/product", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // On large screens, use 3 slides
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // On medium screens, use 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // On small screens, use 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full sm:w-5/6 mx-auto">
      <div className="mt-4 grid grid-cols-1 ">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id} // Add a key prop for better React performance
              className="bg-white h-auto text-black rounded-lg transform transition duration-500 hover:scale-95 hover:shadow-lg"
            >
              <div className="h-40 sm:h-56 md:h-64 rounded-t-xl bg-orange-600 flex  justify-center items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 w-20 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 p-2 sm:p-4">
                <p className="text-sm sm:text-lg md:text-3xl font-semibold text-center">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-center">
                  {item.desc}
                </p>
                <button className="bg-orange-600 text-white text-xs sm:text-sm md:text-lg px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-xl">
                  $ {item.price}
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
